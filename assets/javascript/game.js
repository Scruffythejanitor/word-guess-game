
//variables
var movies = ["Inception", "Star Wars", "Indiana Jones","Jurassic Park","Alien", "Rocky", "Pulp Fiction", "The Goonies", "Titanic", "Die Hard", "Ghostbusters", "Forrest Gump", "Lord Of The Rings", "Breakfast Club", "The Thing", "Avengers", "Monty Python And The Holy Grail"];
var alphabet = [];
var wins = 0;
var losses = 0;
var pickedMovie;
var movieDashes;
var guessedLetters = [];
var wrongLetters = [];
var maxGuesses = 8;
var badSound = new Audio()
var moviePoster
// var isGameRunning = false
   

for (var i = 0; i < 26; i++) {
    var typedLetter = 65 + i;

    alphabet.push(String.fromCharCode(typedLetter))
}

moviePicker();

document.addEventListener('keyup', function (event) {
    var key = event.key.toUpperCase();
    
    // var removePoster = document.getElementById('poster');
    // removePoster.parentNode.removeChild('poster')
    // if (!isGameRunning) {
        
    // }

    if (alphabet.includes(key)) {
        updateDisplay(key);
        if (isWinningState()) {
            wins++;
            moviePosterPick()
            alert('You win!');
            resetGame();
          }
          if (isLosingState()) {
            losses++;
            document.getElementById('bad-sound').play();
            setTimeout(function(){
                alert('Bad news! You lost.');
            }, 500)
            resetGame();
          }
        }

        document.getElementById('wins').innerText = wins;
        document.getElementById('losses').innerText = losses;
      
  });
// function moviePosterPick() {
//     if (pickedMovie == 'The Thing') {
//         var img = document.createElement("img");
        
//         img.src = "assets/images/the-thing.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Inception') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/inception.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//         }
//     if (pickedMovie == 'Star Wars') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/star-wars.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Indiana Jones') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/indiana-jones.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Jurassic Park') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/jurassic-park.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Alien') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/alien.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Rocky') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/rocky.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Pulp Fiction') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/pulp-fiction.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'The Goonies') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/the-goonies.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Titanic') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/titanic.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Die Hard') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/die-hard.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Ghostbusters') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/ghostbusters.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Forrest Gump') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/forrest-gump.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Lord Of The Rings') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/lord-of-the-rings.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Breakfast Club') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/breakfast-club.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Avengers') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/avengers.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
//     if (pickedMovie == 'Monty Python And The Holy Grail') {
//         var img = document.createElement("img");
 
//         img.src = "assets/images/monty-python-and-the-holy-grail.jpg";
//         var src = document.getElementById('movie-poster');
//         img.setAttribute("id", "poster")
//         src.appendChild(img);
//     }
// }

function moviePicker(){
    pickedMovie = movies[Math.floor(Math.random() * movies.length)];
    
    
    
    movieDashes = pickedMovie.split('');
    
    for (var i = 0; i < movieDashes.length; i++) {
        var character = movieDashes[i];
        
        if (alphabet.includes(character.toUpperCase())) {
            movieDashes[i] = '_';
        }
    }
    document.getElementById('word-guess').innerHTML = movieDashes.join('&nbsp');
}

function resetGame() {
    guessedLetters = [];
    wrongLetters = [];
    pickedMovie = '';
    movieDashes = [];
    moviePicker();
    updateDisplay(null);
    
}

function addLetterToWord(letter){
    for (let i = 0; i < movieDashes.length; i++) {
        if(pickedMovie[i].toUpperCase() === letter){
            movieDashes[i] = letter;
        }
    }
    document.getElementById('word-guess').innerHTML = movieDashes.join('&nbsp;');
}

function isLetterInMovieTitle(letter) {
    return pickedMovie.toUpperCase().includes(letter);
}

function updateDisplay(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        
        document.getElementById('letters-guessed').innerHTML = guessedLetters.join(' ');
      }
    
    document.getElementById("life-left").innerText = (maxGuesses - wrongLetters.length);

    if(isLetterInMovieTitle(letter)) {
        addLetterToWord(letter);
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
    
            document.getElementById('wrong-letters').innerHTML = wrongLetters.join(' ')
        }
    }
}

function isWinningState() {
    return movieDashes.join('') === pickedMovie.toUpperCase();
}

function isLosingState() {
    return wrongLetters.length >= maxGuesses;
}

