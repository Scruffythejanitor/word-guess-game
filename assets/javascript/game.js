  
//variables
var movies = ["Inception", "Star Wars", "Indiana Jones","Jurassic Park","Alien", "Rocky", "Pulp Fiction", "ET", "Titanic", "Die Hard", "Ghostbusters", "Forrest Gump", "Lord Of The Rings", "Breakfast Club", "The Thing", "Avatar", "Monty Python And The Holy Grail"];
var wrongLetters = []
var guesses = 8
var wins = 0
var wrongSound = Audio//sudo
var rightSound = Audio//sudo
var wordToGuess = []
var GuessNumber
var foundLetter = []
var guessedLetters = []

// //Check if typed letter is in the alphabet
// function alphabet(checkAlpha) {
//   return /^[A-Za-z]+$/.test(checkAlpha);
// }
// function alphabet(keyup)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(keyup.value.match(letters))
//      {
//       return true;
//      }
//    else
//      {
//      alert("message");
//      return false;
//      }
//   }


//keystroke Listener
document.addEventListener('keyup', function () { 
    
    guessedLetters.push(event.key)
    console.log(guessedLetters);
    checkLetterPressed()
    
        
 });

//starts a new game
 newGame()
updateHtml()
//new game function
function newGame() {

    //picking movie at random
    pickedMovie = movies[Math.floor(Math.random() * movies.length)]
    console.log(pickedMovie);

    //reset guesses and word to be guessed
    guessedLetters = []
    wordToGuess = []

    //Logs letters and spaces for picked movie
    for (var i = 0; i < pickedMovie.length; i++) {
        if (pickedMovie[i] === " "){
            wordToGuess.push(" ")
        } else {
            wordToGuess.push("_")
        }  
    }
    console.log(wordToGuess);
    
}
// game
function checkLetterPressed(){
    for (var i = 0; i < pickedMovie.length; i++) {
        if (guessedLetters === pickedMovie[i]) {
            foundLetter.push("")
            
        } else{
            wrongLetters.push("")
        }
        
    }
}


//Publish to Index.html
function updateHtml() {
    wrongLetters.push
    document.getElementById("lettersGuessed").innerText = wrongLetters;
    document.getElementById('lifeLeft').innerText = guesses;
    document.getElementById('Wins').innerText = wins;
    document.getElementById('wordGuess').innerText = wordToGuess;
}