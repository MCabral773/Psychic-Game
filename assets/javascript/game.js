
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var win = 0;
    var loss = 0;
    var guessLeft = 9;
    var guessSoFar = [];

    function reset (){
        guessLeft = 9;

        guessSoFar = [];
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
          var userGuess = String.fromCharCode();

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
        document.querySelector('#win').innerHTML = "Win: " + win;
        document.querySelector('#loss').innerHTML = "Loss: " +loss;
        document.querySelector('#guessleft').innerHTML = "Number of guess left: " + guessLeft;
        document.querySelector('#guessSoFar').innerHTML = " Your guess so far: " +guessSoFar;
    ;