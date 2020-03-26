var diceValue1;
var diceValue2;

function randomizeDice() {
  diceValue1 = Math.ceil(Math.random() * 6);
  diceValue2 = Math.ceil(Math.random() * 6);
  document.getElementById("playerOne").setAttribute("src", "images/dice" + diceValue1 + ".png");
  document.getElementById("playerTwo").setAttribute("src", "images/dice" + diceValue2 + ".png");
}

function rollDice() {
  let animation = setInterval(randomizeDice, 50);
  setTimeout(function() {
    clearInterval(animation);
    let title = document.querySelector("h1");
    if (diceValue1 > diceValue2) {
      title.textContent = "🚩Player 1 wins!";
    } else if (diceValue1 < diceValue2) {
      title.textContent = "Player 2 wins!🚩";
    } else {
      title.textContent = "🚩Draw🚩";
    }
  }, 300);
}

document.querySelector(".button").addEventListener("click", rollDice);
