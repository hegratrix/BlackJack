
//START MAIN 'SCOREBOARD' LOGIC

var bjWon = 0
var bjTied = 0
var bjLost = 0
var bjWonSB = document.querySelector("#mainBJWon")
var bjTiedSB = document.querySelector("#mainBJTied")
var bjLostSB = document.querySelector("#mainBJLost")

function updateMainScore() {
  if (bjWon == 0) {
    bjWonSB.style.color = "whitesmoke"
  } else {
    bjWonSB.style.color = "forestgreen"
    bjWonSB.textContent = bjWon
  }

  if (bjTied == 0) {
    bjTiedSB.style.color = "whitesmoke"

  } else {
    bjTiedSB.style.color = "yellow"
    bjTiedSB.textContent = bjTied
  }

  if (bjLost == 0) {
    bjLostSB.style.color = "whitesmoke"
  } else {
    bjLostSB.style.color = "red"
    bjLostSB.textContent = bjLost
  }

}

function bjOnDealCheck() {

  if (players[1].Points == 21 && cardsInHand2 == 2) {
    document.getElementById("status").innerHTML = "Hand 2 BLACKJACK!!";
    document.getElementById("status").style.display = "inline";
    statusHand2 = "blackjack"
  }

  if (players[0].Points == 21 && cardsInHand1 == 2) {
    document.getElementById("status").innerHTML = "Hand 1 BLACKJACK!!";
    document.getElementById("status").style.display = "inline";
    statusHand1 = "blackjack"
    stay()
  }



}

function blackjackCheck() {
  if (statusHand1 == "blackjack" && end == true) {

    if (statusHand2 == "blackjack" && end == true) {
      document.getElementById("status").innerHTML = "BJ TIE!!!";
      document.getElementById("status").style.display = "inline";
      // alert("BJ TIE!!!")
      bjWon = bjWon + 2
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ VS 21... Tie for 21 Match... Win for BJ!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ VS 21... Tie for 21 Match... Win for BJ!!!")
      bjTied = bjTied + 1
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ VS 21... Tie for 21 Match... Win for BJ!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ VS MaxJack... Tie for 21 Match... Win for BJ!!!")
      bjTied = bjTied + 1
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ Win!!! MAXOVER";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ Win!!! MAXOVER")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ Win!!! MaxCArdReached";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ Win!!! MaxCardReached")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ LOST!!! H2 UNDER17MAX beats all!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ LOST!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ Win!!! threeCardBust";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ Win!!! threeCardBust")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ Win!!! threeCardNormal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ Win!!! threeCardNormal")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One BJ Win!!! Normal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One BJ Win!!! Normal")
      bjWon = bjWon + 1
      updateMainScore()
    }

  }

}

function twentyOneCheck() {
  if (statusHand1 == "twentyOne" && end == true) {

    if (statusHand2 == "blackjack" && end == true) {
      document.getElementById("status").innerHTML = "21 BLACKJACK TIE LOSS... Tie for 21 Loss for nature BLACKJACK!!!";
      document.getElementById("status").style.display = "inline";
      // alert("21 BLACKJACK TIE LOSS... Tie for 21 Loss for nature BLACKJACK!!!")
      bjTied = bjTied + 1
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      document.getElementById("status").innerHTML = "Hand One vs VS 21... Tie for 21 Match... Tie for Card Count!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One vs VS 21... Tie for 21 Match... Tie for Card Count!!!")
      bjTied = bjTied + 2
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 VS MaxJack... Tie for 21 match... loss to MAXJACK for BJ!!!";
      document.getElementById("status").style.display = "inline";
      alert("Hand One 21 VS MaxJack... Tie for 21 match... loss to MAXJACK for BJ!!!")
      bjTied = bjTied + 1
      bjWon = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 Win!!! MAXOVER";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One 21 Win!!! MAXOVER")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 Win!!! MaxCardR";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One 21 Win!!! MaxCardReached")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 LOST!!! H2 UNDER17MAX beats all!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One 21 LOST!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {      
      document.getElementById("status").innerHTML = "Hand One 21 Win!!! threeCardBust";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One 21 Win!!! threeCardBust")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 Win!!! threeCardNormal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One 21 Win!!! threeCardNormal")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One 21 Win!!! Normal";
      document.getElementById("status").style.display = "inline";
      alert("Hand One 21 Win!!! Normal")
      bjWon = bjWon + 1
      updateMainScore()
    }
  }

}

function maxJackCheck() {

  if (statusHand1 == "maxJack" && end == true) {



    if (statusHand2 == "blackjack" && end == true) {
      document.getElementById("status").innerHTML = "MaxJAck BlackJAck Tie!! 1 Point";
      document.getElementById("status").style.display = "inline";
      // alert("MaxJAck BlackJAck Tie!!! 1Point")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      document.getElementById("status").innerHTML = "MaJack 21 Power Win!!!";
      document.getElementById("status").style.display = "inline";
      alert("MaxJaCK 21 Power Win!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {      
      document.getElementById("status").innerHTML = "MaxJack... Tie!!!";
      document.getElementById("status").style.display = "inline";
      // alert("MaxJack... Tie!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack Win!!! MAXOVER";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack Win!!! MAXOVER")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack Win!!! MaxCardReached";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack Win!!! MaxCardReached")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack WIN!!! H2 UNDER17MAX beats all BUT MAXJACK!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack WIN!!! H2 UNDER17MAX beats all BUT MAXJACK!!!")
      bjWon = bjwon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack Win!!! threeCardBust";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack Win!!! threeCardBust")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack Win!!! threeCardNormal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack Win!!! threeCardNormal")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MaxJack Win!!! Normal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MaxJack Win!!! Normal")
      bjWon = bjWon + 1
      updateMainScore()
    }
  }

}

function maxCardsOverCheck() {



  if (statusHand1 == "over21MaxCard" && end == true) {

    if (statusHand2 == "blackjack" && end == true) {
      document.getElementById("status").innerHTML = "over21MaxCard BLACKJACK... BUST!!!";
      document.getElementById("status").style.display = "inline";
      // alert("over21MaxCard BLACKJACK... BUST!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      document.getElementById("status").innerHTML = "over21MaxCard TwentyOne... BUST!!!";
      document.getElementById("status").style.display = "inline";
      // alert("over21MaxCard TwentyOne... BUST!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      document.getElementById("status").innerHTML = "over21MaxCard MAXJACK... BUST!!!";
      document.getElementById("status").style.display = "inline";
      // alert("over21MaxCard MAXJACK... BUST!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "MAXCARDOVER21 WAR... WHO GOT THE CLOSEST TO 21???.....       "
      document.getElementById("status").style.display = "inline";
      // alert("MAXCARDOVER21 WAR... WHO GOT THE CLOSEST TO 21???")
      if (players[0].Points == players[1].Points) {
        document.getElementById("status").innerHTML += "OverMaxTie!!!";
        // alert("OverMax Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        document.getElementById("status").innerHTML += "Hand ONE Closer to 21 Equals a WIN!!!";
        // alert("Hand One Closer to 21 EQuals a WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        document.getElementById("status").innerHTML = "Hand TWO Closer to 21 Equals a LOSE!!!";
        // alert("Hand TWO Closer to 21 EQuals a LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MAXCARDOVER21 BUST!!! MaxCardReached";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MAXCARDOVER21 BUST!!! MaxCardReached")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MAXCARDOVER21 BUST!!! H2 UNDER17MAX beats all BUT MAXJACK!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MAXCARDOVER21 BUST!!! H2 UNDER17MAX beats all BUT MAXJACK!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      document.getElementById("status").innerHTML = "Cards Count Must Match for there to be a bust battle... this is just an overMax Bust!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Cards COunt Must Match for there to be a bust battle... this is just an overMax Bust!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MAXCARDOVER21 BUST!!! threeCardNormal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MAXCARDOVER21 Bust!!! threeCardNormal")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One MAXCARDOVER21 BUST!!! Normal";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One MAXCARDOVER21 BUST!!! Normal")
      bjLost = bjLost + 1
      updateMainScore()
    }
  }

}

function maxCardsReachedCheck() {

  if (statusHand1 == "maxCardsReached" && end == true) {


    if (statusHand2 == "blackjack" && end == true) {
      document.getElementById("status").innerHTML = "maxCardsReached lost to BLACKJACK... LOSS!!!";
      document.getElementById("status").style.display = "inline";
      // alert("maxCardsReached lost to BLACKJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      document.getElementById("status").innerHTML = "maxCardsReached lost to TwentyOne... LOSS!!!";
      document.getElementById("status").style.display = "inline";
      // alert("maxCardsReached Lost to TwentyOne... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      document.getElementById("status").innerHTML = "maxCardsReached lost to MAXJACK... LOSS!!!";
      document.getElementById("status").style.display = "inline";
      alert("maxCardsReached lost to MAXJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "maxCardsReached Wins to a busted over21MaxCard WON...";
      document.getElementById("status").style.display = "inline";
      // alert("maxCardsReached Wins to a busted over21MaxCard WON...")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      document.getElementById("status").innerHTML = "Hand One maxCardsReached Normal Battle!!! MaxCardReached...     ";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One maxCardsReached Normal Battle!!! MaxCardReached")
      if (players[0].Points == players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached battle Tie!!!";
        // alert("maxCardsReached battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        document.getElementById("status").innerHTML = "maxCardsReached battle WIN!!!";
        // alert("maxCardsReached battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        document.getElementById("status").innerHTML = "maxCardsReached battle LOSE!!!";
        document.getElementById("status").style.display = "inline";
        // alert("maxCardsReached battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      document.getElementById("status").innerHTML = "Hand One maxCardsReached LOSS!!! H2 UNDERMAX17 beats all BUT MAXJACK!!!";
      document.getElementById("status").style.display = "inline";
      // alert("Hand One maxCardsReached LOSS!!! H2 UNDER17MAX beats all BUT MAXJACK!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      document.getElementById("status").innerHTML = "maxCardsReached Win h2 Bust with 3 cards!!!";
      document.getElementById("status").style.display = "inline"; 
      // alert("maxCardsReached Win h2BUst with 3 cards!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One maxCardsReached vs threeCardNormal battle!!!...   "
      document.getElementById("status").style.display = "inline"; 
      // alert("Hand One maxCardsReached vs threeCardNormal battle")
      if (players[0].Points == players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached vs threeCardNormal Tie!!!";
        // alert("maxCardsReached vs threeCardNormal Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached vs threeCardNormal WIN!!!"
        // alert("maxCardsReached vs threeCardNormal WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached vs threeCardNormal LOSE!!!"
        // alert("maxCardsReached vs threeCardNormal LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "normal" && end == true) {
      document.getElementById("status").innerHTML = "Hand One maxCardsReached vs NORMAL battle!!!...     ";
      document.getElementById("status").style.display = "inline"; 
      // alert("Hand One maxCardsReached vs NORMAL battle")
      if (players[0].Points == players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached vs NORMAL Tie!!!";
        // alert("maxCardsReached vs NORMAL Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        document.getElementById("status").innerHTML += "maxCardsReached vs NORMAL WIN!!!";
        // alert("maxCardsReached vs NORMAL WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        document.getElementById("status").innerHTML = "maxCardsReached vs NORMAL LOSE!!!";
        // alert("maxCardsReached vs NORMAL LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }
  }

}

function hand2Under17MaxCheck() {



  if (statusHand1 == "under17MaxCard" && end == true) {



    if (statusHand2 == "blackjack" && end == true) {
      alert("maxCardsReached lost to BLACKJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      alert("maxCardsReached Lost to TwentyOne... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      alert("maxCardsReached lost to MAXJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      alert("maxCardsReached Wins to a busted over21MaxCard WON...")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      alert("under17MaxCard vs maxCardsReached Battle!!! MaxCardReached")
      if (players[0].Points == players[1].Points) {
        alert("under17MaxCard vs maxCardsReached Battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("under17MaxCard vs maxCardsReached Battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("under17MaxCard vs maxCardsReached Battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      alert("under17MaxCard Battle that you automatically lose!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      alert("under17MaxCard vs threeCardBust that you automatically lose!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      alert("under17MaxCard Vs ThreeCardNormal that you automatically lose!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      alert("under17MaxCard vs Normal that you automatically lose!!! H2 UNDER17MAX beats all!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }
  }



}

function threeCardBustCheck() {



  if (statusHand1 == "threeCardBust" && end == true) {



    if (statusHand2 == "blackjack" && end == true) {
      alert("threeCardBust lost to BLACKJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      alert("threeCardBust Lost to TwentyOne... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      alert("threeCardBust lost to MAXJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      alert("threeCardBust busted to over21MaxCard BUST...")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      alert("threeCardBust busted to maxCardsReached BUST...")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      alert("threeCardBust to an automatic under17Max LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      alert("threeCardBust BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("threeCardBust BATTLE Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("threeCardBust BATTLE Closer to 21 EQuals a WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("threeCardBust BATTLE Hand TWO Closer to 21 EQuals a LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      alert("Hand One threeCardBust vs threeCardNormal BUST!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "normal" && end == true) {
      alert("Hand One threeCardBust vs NORMAL BUST!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }
  }


}

function threeCardNormalCheck() {



  if (statusHand1 == "threeCardNormal" && end == true) {



    if (statusHand2 == "blackjack" && end == true) {
      alert("threeCardNormal lost to BLACKJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      alert("threeCardNormal Lost to TwentyOne... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      alert("threeCardNormal lost to MAXJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      alert("threeCardNormal WINS to over21MaxCard BUST WIN!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      alert("threeCardNormal vs maxCardsReached BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("threeCardNormal vs maxCardsReached Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("threeCardNormal vs maxCardsReached WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("threeCardNormal vs maxCardsReached LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      alert("threeCardNormal to an automatic under17Max LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      alert("threeCardNormal WINS to threeCardBust BUST WIN!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      alert("Hand One threeCardNormal BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("threeCardNormal battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("threeCardNormal battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("threeCardNormal battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "normal" && end == true) {
      alert("Hand One threeCardNormal VS NORMAL BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("threeCardNormal VS NORMAL battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("threeCardNormal VS NORMAL battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("threeCardNormal VS NORMAL battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }
  }


}

function normalCheck() {


  if (statusHand1 == "normal" && end == true) {


    if (statusHand2 == "blackjack" && end == true) {
      alert("normal lost to BLACKJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "twentyOne" && end == true) {
      alert("normal Lost to TwentyOne... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "maxJack" && end == true) {
      alert("normal lost to MAXJACK... LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "over21MaxCard" && end == true) {
      alert("normal WINS to over21MaxCard BUST WIN!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "maxCardsReached" && end == true) {
      alert("normal vs maxCardsReached BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("normal vs maxCardsReached Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("normal vs maxCardsReached WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("normal vs maxCardsReached LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "under17MaxCard" && end == true) {
      alert("normal to an automatic under17Max LOSS!!!")
      bjLost = bjLost + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardBust" && end == true) {
      alert("normal WINS to threeCardBust BUST WIN!!!")
      bjWon = bjWon + 1
      updateMainScore()
    }

    if (statusHand2 == "threeCardNormal" && end == true) {
      alert("Hand One threeCardNormal BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("threeCardNormal battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("threeCardNormal battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("threeCardNormal battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }

    if (statusHand2 == "normal" && end == true) {
      alert("Hand One Normal BATTLE!!!")
      if (players[0].Points == players[1].Points) {
        alert("Normal battle Tie!!!")
        bjTied = bjTied + 1
        updateMainScore()
      } else if (players[0].Points > players[1].Points) {
        alert("Normal battle WIN!!!")
        bjWon = bjWon + 1
        updateMainScore()
      } else if (players[0].Points < players[1].Points) {
        alert("Normal battle LOSE!!!")
        bjLost = bjLost + 1
        updateMainScore()
      }
    }
  }


}


function check() {


  if (end == true && currentPlayer == 1) {

    // alert("HAND ONE STATUS = " + statusHand1 + " HAND TWO STATUS = " + statusHand2)
console.log ("check")

    blackjackCheck()
    twentyOneCheck()
    maxJackCheck()
    maxCardsOverCheck()
    maxCardsReachedCheck()
    hand2Under17MaxCheck()
    threeCardBustCheck()
    threeCardNormalCheck()
    normalCheck()

  }
}

function updateDeck() {
  document.getElementById('deckcount').innerHTML = deck.length;
}

function handOneNormalCheck() {
  //alert(statusHand1)
  if (statusHand1 == "normal" && statusHand2 == "normal") {
    if (players[0].Points == players[1].Points) {
      alert("Normal Tied")
      bjTied = bjTied + 1
    } else if (players[0].Points > players[1].Points) {
      alert("Normal Win")
      bjWon = bjWon + 1
    } else if (players[0].Points < players[1].Points) {
      alert("Normal Lost")
      bjLost = bjLost + 1
    }
  }
}









function theEnd() {


}

window.addEventListener('load', function() {
  createDeck();
  shuffle();
  createPlayers(2);
});