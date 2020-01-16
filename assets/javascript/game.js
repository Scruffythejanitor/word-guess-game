  
//variables
var movies = ["Inception", "Star Wars", "Indiana Jones","Jurassic Park","Alien", "Rocky", "Pulp Fiction", "ET", "Titanic", "Die Hard", "Ghostbusters", "Forrest Gump", "Lord Of The Rings", "Breakfast Club", "The Thing", "Avatar", "Monty Python And The Holy Grail"];
var wrongLetters = []
var guesses = 8
var wins = 0
var wrongSound = Audio//sudo
var rightSound = Audio//sudo
var wordToGuess = []
var foundLetter = []
var guessedLetters = []
var gameIsRunning = false

//keystroke Listener
document.addEventListener('keyup', function () { 
   //starts new game
    if (!gameIsRunning) {
        startGame() 
        gameIsRunning = true
        return
    }
    //make event key toUpperCase
    //limit event.keys to only alpha a-z
    guessedLetters.push(event.key)
    console.log(guessedLetters);
    checkLetterPressed(event.key)
    updateHtml()
    
        
 });

//new game function
function startGame() {

    //picking movie at random
    pickedMovie = movies[Math.floor(Math.random() * movies.length)]
    console.log(pickedMovie);

    //reset guesses and word to be guessed
    
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
function checkLetterPressed(letterPressed){
    for (var i = 0; i < pickedMovie.length; i++) {
        if (letterPressed === pickedMovie[i]) {
            foundLetter.push(letterPressed);
            //play happy sound
            //need to split pickedMovie
            //make foundletter.toUpperCase();
            //fill in found letter with corrisponding letter in pickedMovie
            //if all letters are guessed in pickedMovie, User wins
            //update wins
            return;
        }
                
    }
    wrongLetters.push(letterPressed)
    //play sad sound
    if (wrongLetters.includes = letterPressed) {
        //keep already guessed letter from being guessed again
    }
    //-1 from gueesses

    //if all guesses are used, user loses
    //end game

       console.log(wrongLetters);
       console.log(foundLetter);
       
    }



//Publish to Index.html
function updateHtml() {
    document.getElementById("lettersGuessed").innerText = wrongLetters;
    document.getElementById('lifeLeft').innerText = guesses;
    document.getElementById('wins').innerText = wins;
    document.getElementById('wordGuess').innerText = wordToGuess.join(" ");
}