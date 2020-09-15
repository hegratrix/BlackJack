//START GAME LOGIC
//Hope here took out variables changed ace in hand from true/false to numbers in case hand has multiple aces
var suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
var deck = new Array()
var players = new Array()
var currentPlayer = 0
var currentHand = 1
var wins = 0
var losses = 0
var cardsInHand1 = 2
var cardsInHand2 = 2
var statusHand1 = null
var statusHand2 = null
var aceInHand = 0
var handOne11 = true
var handTwo11 = true
var end = false

function createDeck() {
  deck = new Array();
  for (var i = 0; i < values.length; i++) {
    for (var x = 0; x < suits.length; x++) {
      weight = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
        weight = 10;
      if (values[i] == "A")
        weight = 11;
      card = {
        Value: values[i],
        Suit: suits[x],
        Weight: weight
      };
      deck.push(card);
    }
  }
}

//Hope was here, added aceInPlay to player hand array
function createPlayers(num) {
  players = new Array()
  for (var i = 1; i <= num; i++) {
    var hand = new Array()
    var player = {
      Name: 'Hand ' + i,
      ID: i,
      Points: 0,
      Hand: hand,
      aceInHand: 0
    }
    players.push(player)
  }
}

function createPlayersUI() {
  document.getElementById('players').innerHTML = '';
  for (var i = 0; i < players.length; i++) {
    var div_player = document.createElement('div');
    var div_playerid = document.createElement('div');
    var div_hand = document.createElement('div');
    var div_points = document.createElement('div');

    div_points.className = 'points';
    div_points.id = 'points_' + i;
    div_player.id = 'player_' + i;
    div_player.className = 'player';
    div_hand.id = 'hand_' + i;

    div_playerid.innerHTML = 'Hand ' + players[i].ID;
    div_player.appendChild(div_playerid);
    div_player.appendChild(div_hand);
    div_player.appendChild(div_points);
    document.getElementById('players').appendChild(div_player);
  }
}

function shuffle() {
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

//called from start button, click start over, not a second hand, only want at the beginning of the game
function startblackjack() {
  document.getElementById('btnStart').value = 'Restart';
  document.getElementById("status").style.display = "none";
  document.getElementById("btnDeal").style.display = "none";
  document.getElementById("hitMeButt").style.display = "inline";
  document.getElementById("bjStayH2").style.display = "inline";
  document.querySelector("#hitMeButt").disabled = false
  // deal 2 cards to every player object
  cardsInHand1 = 2
  cardsInHand2 = 2
  currentPlayer = 0
  currentHand = 1
  statusPlayer1 = null
  statusPlayer2 = null
  aceInHand = 0
  handOne11 = true
  handTwo11 = true
  end = false
  createDeck()
  shuffle()
  createPlayers(2)
  createPlayersUI()
  dealHands()

  document.getElementById('player_' + currentPlayer).classList.add('active')
}

function dealNewHand() {
  document.getElementById("status").style.display = "none";
  document.getElementById("btnDeal").style.display = "none";
  document.getElementById("hitMeButt").style.display = "inline";
  document.getElementById("bjStayH2").style.display = "inline";
  document.querySelector("#hitMeButt").disabled = false
  players[0].Hand = [];
  players[1].Hand = [];
  document.getElementById("hand_1").innerHTML = "";
  document.getElementById("hand_0").innerHTML = "";
  cardsInHand1 = 2
  cardsInHand2 = 2
  currentPlayer = 0
  currentHand = 1
  statusHand1 = null
  statusHand2 = null
  statusPlayer1 = null
  statusPlayer2 = null
  aceInHand = 0
  handOne11 = true
  handTwo11 = true
  end = false
  dealHands()
  document.getElementById('player_' + currentPlayer).classList.add('active')
};

function dealHands() {
  // alternate handing cards to each player
  // 2 cards each
  //Hope here checks to see if there are 10 cards or more before dealing
  if (deck.length >=8) {
    for (var i = 0; i < 2; i++) {
      for (var x = 0; x < players.length; x++) {

        var card = deck.pop();
        players[x].Hand.push(card);

        //Set which player is being dealt to...
        if (currentHand == 0) {
          currentHand = 1
        } else {
          currentHand = 0
        }
        renderCard(card, x);
        updateDeck();
        updatePoints();
      }
    }
  } else {
    deck = [];
    createDeck();
    shuffle();
    dealNewHand();
  }
  bjOnDealCheck();
}

//Hope here pushed aceInHand into deck array
function renderCard(card, player) {
  var hand = document.getElementById('hand_' + player);
  if (card.Value == "A" && player == 0) {
    players[0].aceInHand = players[0].aceInHand +1
  } else if (card.Value == "A" && player == 1) {
    players[1].aceInHand = players[1].aceInHand +1;
  }
  hand.appendChild(getCardUI(card));
}

function getCardUI(card) {
  var el = document.createElement('div');
  var icon = '';
  if (card.Suit == 'Hearts')
    icon = '&hearts;';
  else if (card.Suit == 'Spades')
    icon = '&spades;'
  else if (card.Suit == 'Diamonds')
    icon = '&diams;';
  else
    icon = '&clubs;';
  el.className = 'card'
  el.innerHTML = card.Value + '<br/>' + icon;
  return el;
}

//Hope here. call hand sort functions here before they have a chance to hit again.
function getPoints(player) {
  //Hope here if there is an ace and it goes over 21, subtracts 10 points basically reducing A from 11 to 1
  // returns the number of points that a player has in hand
  var points = 0;
  for (var i = 0; i < players[player].Hand.length; i++) {
    points += players[player].Hand[i].Weight;
  }
  //Hope here takes into account multiple aces
  if (players[player].aceInHand > 0) {
    for (var i = 0; i <players[player].aceInHand; i++) {
      if (points > 21) {
        points -= 10;
      }
    }
  }
  players[player].Points = points;
  if (player==0) {
    handOneSort()
  } else if (player==1) {
    handTwoSort()
  }
}

function updatePoints() {
  for (var i = 0; i < players.length; i++) {
    getPoints(i);

    document.getElementById('points_' + i).innerHTML = players[i].Points;
  }
  // Hope here moved on deal Check. the message popped up before you saw that you had blackjack
  // bjOnDealCheck()
}

function handOneSort() {

  if (currentHand == 0) {
    if (players[0].Points < 17 && cardsInHand1 == 4) {
      statusHand1 = "under17MaxCard"
      stay()
    } else if (players[0].Points == 21 && cardsInHand1 == 3) {
      statusHand1 = "twentyOne"
      stay()
    } else if (players[0].Points == 21 && cardsInHand1 == 4) {
      statusHand1 = "maxJack"
      stay()
    } else if (players[0].Points > 21 && cardsInHand1 == 4) {
      statusHand1 = "over21MaxCard"
      stay()
    } else if (cardsInHand1 == 4) {
      statusHand1 = "maxCardsReached"
      stay()
    } else if (players[0].Points > 21 && cardsInHand1 == 3) {
      statusHand1 = "threeCardBust"
      stay()
    } else if (players[0].Points < 21 && cardsInHand1 == 3) {
      statusHand1 = "threeCardNormal"
    } else if (players[0].Points < 21 && cardsInHand1 == 4) {
      statusHand1 = "normal"
      stay()
    }
  }
}

function handTwoSort() {
  if (currentHand == 1) {
    if (statusHand2 == "blackjack") {
      end = true
      stay()
    } else if (players[1].Points < 17 && cardsInHand2 == 4) {
      statusHand2 = "under17MaxCard"
      end = true
      stay()
    } else if (players[1].Points == 21 && cardsInHand2 == 3) {
      statusHand2 = "twentyOne"
      end = true
      stay()
    } else if (players[1].Points == 21 && cardsInHand2 == 4) {
      statusHand2 = "maxJack"
      end = true
      stay()
    } else if (players[1].Points > 21 && cardsInHand2 == 4) {
      statusHand2 = "over21MaxCard"
      end = true
      stay()
    } else if (cardsInHand2 == 4) {
      statusHand2 = "maxCardsReached"
      end = true
      stay()
    } else if (players[1].Points > 21 && cardsInHand2 == 3) {
      statusHand2 = "threeCardBust"
      end = true
      stay()
    } else if (players[1].Points < 21 && cardsInHand2 == 3) {
      statusHand2 = "threeCardNormal"

    } else if (players[1].Points < 21 && cardsInHand2 == 4) {
      statusHand2 = "normal"
      end = true
      stay()
    }
  }
}


function hitMe() {
  // pop a card from the deck to the current player
  // check if current player new points are over 21
  console.log(statusHand2)
  console.log(statusHand1)
  var card = deck.pop();

  players[currentPlayer].Hand.push(card);

  if (currentPlayer == 0) {
    cardsInHand1 = cardsInHand1 + 1
    currentHand = 0
  }

  if (currentPlayer == 1) {
    cardsInHand2 = cardsInHand2 + 1
    currentHand = 1
  }

  renderCard(card, currentPlayer);
  updatePoints();
  updateDeck();
}


function stay() {
  // move on to next player, if any
  if (currentPlayer != players.length - 1) {
    document.getElementById('player_' + currentPlayer).classList.remove('active');
    currentPlayer += 1;
    if (statusHand2 == "blackjack") {
      console.log ('blackjack here')
      end = true
      check()
    } else {
    document.getElementById('player_' + currentPlayer).classList.add('active');
    }
  } else {
    document.querySelector("#hitMeButt").style.display = 'none';
    document.querySelector("#bjStayH2").style.display = 'none';
    document.querySelector("#btnDeal").style.display = 'inline';


    // alert(end + " BEFORE...")
    end = true
    // alert(end + " After...")


    check()

  }

}