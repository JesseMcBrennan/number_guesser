
//Number Generator

var randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber)

//User Input

var userInput = document.querySelector('#user-input');

//Buttons

var submitBtn = document.querySelector('#guessPlease');
var clearBtn = document.querySelector('#clearBtn');
var resetBtn = document.querySelector('#resetBtn');
var userInputclear = document.querySelector('number');

//Displayed Text

var enterGuess = document.querySelector('#enterGuess');
var lastGuess = document.querySelector('#lastGuess');
var hint = document.querySelector('#hint');
var guessForm = document.querySelector('#guessForm');

//Change to document.querySelector

var min = 1;
var max = 100;

//Functions

userInput.addEventListener('keypress', function() {
  submitBtn.disabled = false;
  resetBtn.disabled = false;
  clearBtn.disabled = false;

})

submitBtn.addEventListener('click', function() {
  lastGuess.innerText = parseInt(userInput.value)
})

submitBtn.addEventListener('click', function() {
  var currentGuess = parseInt(userInput.value) 
  if (currentGuess < 0) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess > 100) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess < randomNumber) {
    hint.innerText = 'Too Low'
  } else if (currentGuess > randomNumber) {
    hint.innerText = 'Too High'
  } else if (isNaN(currentGuess)) {
    lastGuess.innerText = 'This is not a number' 
  } else if (currentGuess === randomNumber) {
    lastGuess.innerText = 'YOU GOT IT!'
  }
})

//Button Functions

resetBtn.addEventListener('click', function() {
  location.reload();
})

clearBtn.addEventListener('click', function() {
  userInput.value = " ";
  lastGuess.innerText = " ";
  hint.innerText = " ";
  enterGuess.innerText = "Enter your guess";
  clearBtn.disabled = true;
  resetBtn.disabled = true;
  submitBtn.disabled = true;
})

submitBtn.addEventListener('click', function() {
  enterGuess.innerText = "Your last guess was:"
})

/*function youWon() {
  if lastGuess.
}*/
// Questins for Tony:


//Notes - for Rest Button: look at text display field, if it not empty have button enabled




/*submitBtn.addEventListener('click', function() {
  var currentGuess = parseInt(userInput.value)
  if (currentGuess < randomNumber) {
    hint.innerText = 'Too Low'
  } else if (currentGuess > randomNumber) {
    hint.innerText = 'Too High'
  } else if (currentGuess < 0) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess > 100) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess === NaN) {
    hint.innerText = 'This is not a number' 
  } else if (currentGuess === randomNumber) {
    lastGuess.innerText = 'YOU GOT IT!'
  }
})

resetBtn.addEventListener('click', function() {
  location.reload();
})*/



/*submitBtn.addEventListener('click', function()) {
  
})*/




/*//



//First Step



});

function numberCheck(userInput) {
    if (isNaN(userInput)) {
    return 'Not a Number!';
    }
  return userInput;
}

function compareNumber() {
  if (guessConvert < min || guessConvert > max);
  hint.innerText = 'Sorry you need to guess a number between 1 and 100'
}
*/

///Sudo Code
 // User inputs number -> function confirms input is a number -> if not, prints 'NaN', if is  parseINT Value



// function userGuess() {
//   if (var userInput <= var max)
//   return lastGuess.innerText
// }





