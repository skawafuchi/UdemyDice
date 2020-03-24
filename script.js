function rollDice() {
  var randomNumberPlayerOne = Math.ceil(Math.random() * 6)
  var randomNumberPlayerTwo = Math.ceil(Math.random() * 6)
  var title = document.querySelector("h1");
  document.getElementById("playerOne").setAttribute("src", "images/dice" + randomNumberPlayerOne + ".png");
  document.getElementById("playerTwo").setAttribute("src", "images/dice" + randomNumberPlayerTwo + ".png");
  if (randomNumberPlayerOne > randomNumberPlayerTwo) {
    title.textContent = "🚩Player 1 wins!"
  } else if (randomNumberPlayerOne < randomNumberPlayerTwo) {
    title.textContent = "Player 2 wins!🚩"
  } else {
    title.textContent = "🚩Draw🚩"
  }
}
