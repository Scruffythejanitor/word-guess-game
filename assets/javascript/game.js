  
//variables
var movies = ["Inception", "Star Wars", "Indiana Jones","Jurassic Park","Alien", "Rocky", "Pulp Fiction", "ET", "Titanic", "Die Hard", "Ghostbusters", "Forrest Gump", "Lord Of The Rings", "Breakfast Club", "The Thing", "Avatar", "Monty Python And The Holy Grail"];
var guessedLetters =[]
var guesses = 10
var wins = 0
var wrongLetter = false
var wrongSound = Audio
var rightSound = Audio
var wordToGuess = []

//picking movie at random
pickedMovie = movies[Math.floor(Math.random() * movies.length)]
console.log(pickedMovie);

//Logs letters and spaces for picked movie
for (var i = 0; i < pickedMovie.length; i++) {
    if (pickedMovie[i] === " "){
        wordToGuess.push(" ")
    } else {
        wordToGuess.push("_")
    }  
}
console.log(wordToGuess);

//pressed key event
document.onkeyup = function (typedLetter) {
   if (alphabet(typedLetter.key)){
       newfunction(typedLetter.key.toUpperCase)
   }
        
    }
  
  //Check if typed letter is in the alphabet
function alphabet(checkAlpha) {
    return /^[A-Za-z]+$/.test(checkAlpha);
}


