//javascript code goes here
var startButton = document.querySelector(".start-button");
var wordbank = ["Javascript", "HTML", "coding", "hangman", "dinner"];
var timerEl = document.querySelector(".timer-count");
var wins = 0;
var losses = 0;
var secondsLeft = 10;
var gamesDisplay = document.querySelector(".word-blanks");

function startGame() {
    setTime()
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerText = secondsLeft;
        
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
            clearInterval(timerInterval);
        // Calls function to create and append image
            // sendMessage();
        }
    }, 1000);
  }
startButton.addEventListener("click", startGame);
