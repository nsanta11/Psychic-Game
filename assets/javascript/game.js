
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessList = [];


//must call upon the computer to choose first and this letter can only last until guesses left < 1
$(document).ready(function computerChoice() {

    var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    var html =
          "<p>You chose: " + guessList + "</p>" +
          //"<p>The computer chose: " + computerLetter + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guessesLeft + "</p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

        console.log("The computer chose: " + computerLetter);


    document.onkeyup = function(event) {

    var userGuess = event.key;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

      //Loop for guessing cycle)
      if (userGuess === computerLetter) {
        wins++;
        guessesLeft = 9;
        computerChoice();
        guessList[guessList.length]=userGuess;
        guessList = [];
        } 
      else if (guessesLeft > 1) {
        guessesLeft--;
        guessList[guessList.length]=userGuess;
        }
      else if (guessesLeft <= 1) {
        losses++;
        guessesLeft = 9;
        computerChoice();
        guessList = [];
        }

     var html =
          "<p>You chose: " + guessList + "</p>" +
          //"<p>The computer chose: " + computerLetter + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guessesLeft + "</p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

  }

})
