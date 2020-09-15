//START NAVIGATION LOGIC

var bjInfo = document.querySelector("#bjInfo")
var fullBj = document.querySelector("#fullBj")
var infoDiv = document.querySelector("#infoDiv")
var gameBoard = document.querySelector(".game")
var aboutBJInfoLink = document.querySelector("#aboutBJInfoLink")
var howToBJInfoLink = document.querySelector("#howToBJInfoLink")
var assBJLink = document.querySelector("#assBJLink")
var assUpBJDiv = document.querySelector("#assUpBJDiv")
var assUpBjToGame = document.querySelector("#assUpBjToGame")
var backToBJLink = document.querySelector("#backToBJLink")
var aboutBJtoPlay = document.querySelector("#aboutBJtoPlay")
var howToToPlay = document.querySelector("#howToToPlay")
var aboutLearn420BJ = document.querySelector("#aboutLearn420BJ")
var about420BJDiv = document.querySelector("#about420BJDiv")
var howToBJDiv = document.querySelector("#howToBJDiv")
var linkToBJSource = document.querySelector("#linkToBJSource")
var bjToList = document.querySelector("#bjToList")

bjInfo.addEventListener("mouseover", function() {
  bjInfo.style.color = "white"
})

bjInfo.addEventListener("mouseout", function() {
  bjInfo.style.color = "yellow"
})

bjInfo.addEventListener("click", function() {
  fullBj.style.display = "none"
  bjInfo.style.display = "none"
  about420BJDiv.style.display = "none"
  assUpBJDiv.style.display = "none"
  infoDiv.style.display = "block"
  gameBoard.style.backgroundColor = "darkgreen"
  gameBoard.style.border = "solid 2vw limegreen"
  howToBJDiv.style.display = "none"

})

bjToList.addEventListener("mouseover", function() {
  this.style.color = "white"
})

bjToList.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

bjToList.addEventListener("click", function() {
  this.style.color = "yellow"
  document.querySelector(".game").style.display = "none"
  document.querySelector("#bjAdGroup").style.display = "none"
})

aboutBJInfoLink.addEventListener("mouseover", function() {
  this.style.color = "whitesmoke"
})

aboutBJInfoLink.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

aboutBJInfoLink.addEventListener("click", function() {
  about420BJDiv.style.display = "block"
  bjInfo.style.display = "block"
  infoDiv.style.display = "none"

})

aboutBJtoPlay.addEventListener("mouseover", function() {
  this.style.color = "limegreen"
})

aboutBJtoPlay.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

aboutBJtoPlay.addEventListener("click", function() {
  about420BJDiv.style.display = "none"
  fullBj.style.display = "block"
  gameBoard.style.backgroundColor = "limegreen"
  gameBoard.style.border = "solid 2vw darkgreen"
})

aboutLearn420BJ.addEventListener("mouseover", function() {

  this.style.color = "limegreen"
})

aboutLearn420BJ.addEventListener("mouseout", function() {

  this.style.color = "yellow"
})

aboutLearn420BJ.addEventListener("click", function() {
  about420BJDiv.style.display = "none"
  howToBJDiv.style.display = "block"
})

howToBJInfoLink.addEventListener("mouseover", function() {
  this.style.color = "whitesmoke"
})

howToBJInfoLink.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

howToBJInfoLink.addEventListener("click", function() {
  infoDiv.style.display = "none"
  howToBJDiv.style.display = "block"
  bjInfo.style.display = "block"

})

howToToPlay.addEventListener("mouseover", function() {
  this.style.color = "limegreen"
})

howToToPlay.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

howToToPlay.addEventListener("click", function() {
  howToBJDiv.style.display = "none"
  fullBj.style.display = "block"
  gameBoard.style.backgroundColor = "limegreen"
  gameBoard.style.border = "solid 2vw darkgreen"
})

assBJLink.addEventListener("mouseover", function() {
  this.style.color = "whitesmoke"
})

assBJLink.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

assBJLink.addEventListener("click", function() {
  infoDiv.style.display = "none"
  assUpBJDiv.style.display = "block"
  bjInfo.style.display = "block"
})

linkToBJSource.addEventListener("mouseover", function() {
  this.style.color = "limegreen"
})

linkToBJSource.addEventListener("click", function() {
  window.open('https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript', '_blank');
})

assUpBjToGame.addEventListener("mouseover", function() {
  this.style.color = "limegreen"
})

assUpBjToGame.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

assUpBjToGame.addEventListener("click", function() {
  assUpBJDiv.style.display = "none"
  fullBj.style.display = "block"
  gameBoard.style.backgroundColor = "limegreen"
  gameBoard.style.border = "solid 2vw darkgreen"
})

backToBJLink.addEventListener("mouseover", function() {
  this.style.color = "whitesmoke"
})

backToBJLink.addEventListener("mouseout", function() {
  this.style.color = "yellow"
})

backToBJLink.addEventListener("click", function() {
  fullBj.style.display = "block"
  gameBoard.style.backgroundColor = "limegreen"
  gameBoard.style.border = "solid 2vw darkgreen"
  infoDiv.style.display = "none"
  bjInfo.style.display = "block"
})
//END NAVIGATION LOGIC