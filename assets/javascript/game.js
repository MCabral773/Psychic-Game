
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessLeft = 9;
    var guessSoFar = [];

    function reset (){
        guessLeft = 9;
        guesssoFar = [];
        computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
        console.log (computerGuess);
    }
    reset();
      
    function newWord (){
        guessSoFar = [];
        guessLeft = 9;
        computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
        console.log (computerGuess);
    }

      document.onkeyUp = function(event) {
          var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

          if (!/[a-z]/.test(userGuess)){
              alert ("please choose letter only");
              guessLeft++;
              loss--;
          }
          if (guessSoFar.indexOf(userGuess)){
              alert ("please choose letter only");
              guessLeft++;
              loss--;
          }

          if (guessSoFar.indexOf(userGuess) === -1){
              guessSoFar.push(userGuess);
          }

          else {
              alert ("You already guessed this letter, please choose another one");
              guessLeft++;
              loss--;
          }

          if (userGuess === computerGuess){
              win++;
              alert ("You win! Try guessing a new letter!");
              newWord();
          }
          else {
              loss++;
              guessLeft --;
              if (guessLeft === 0) {
                  alert ("You Lose!")
                  reset ();
              }
          }
      }
        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    ;