
//Number Generator
//var randomNumber = Math.floor(Math.random() * 100 + 1);
var min = 1;
var max = 100;
var randomNumber = Math.floor(Math.random() * (max - min) + min)

console.log(randomNumber)



//User Input

var userInput = document.getElementById('userinput');

//Buttons

var submitBtn = document.querySelector('#guessPlease');
var clearBtn = document.querySelector('#clearBtn');
var resetBtn = document.querySelector('#resetBtn');

var newInputmin = document.querySelector('#new-min');
var newInputmax = document.querySelector('#new-max')

//Displayed Text

var enterGuess = document.querySelector('#enterGuess');
var lastGuess = document.querySelector('#lastGuess');
var hint = document.querySelector('#hint');
var guessForm = document.querySelector('#guessForm');

//Change to document.querySelector


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
  if (currentGuess < min) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess > max) {
    hint.innerText = 'Your guess must be between 1 and 100'
  } else if (currentGuess < randomNumber) {
    hint.innerText = 'Too Low' 
  } else if (currentGuess > randomNumber) {
    hint.innerText = 'Too High' 
  } else if (isNaN(currentGuess)) {
    lastGuess.innerText = 'This is not a number' 
  } else if (currentGuess === randomNumber) 
    lastGuess.innerText = 'YOU GOT IT!'
    youWon(); 
})

//Button Functions variable that = parseint.uservalue 

resetBtn.addEventListener('click', function() {
  location.reload();
})

clearBtn.addEventListener('click', function() {
  userInput.value = "";
  lastGuess.innerText = "";
  hint.innerText = "";
  enterGuess.innerText = "";
  clearBtn.disabled = true;
  resetBtn.disabled = true;
  submitBtn.disabled = true;
})

submitBtn.addEventListener('click', function() {
  enterGuess.innerText = "Your last guess was:"
})

function newRandom(min, max) { 
  randomNumber = Math.floor(Math.random() * (max - min) + min)
}

function youWon() { 
  min = min - 10
  max = max + 10
  newRandom(min, max)
}



/*newInputmin.addEventListener('click', function() {

})*/





