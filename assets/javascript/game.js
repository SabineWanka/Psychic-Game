var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 0;

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    console.log(userGuess)

    var computerGuess = options[Math.floor(Math.random() * options.length)];

    console.log(computerGuess);


    if (userGuess === computerGuess) {
        wins++
        alert("wins" + wins)

    }
    else {
        losses++
        alert("losses" + losses)
    }




    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p> Guesses left: " - guesses - "</p>" +
        "<p> Your Guesses so far: " + guesses + "</p>"


    document.querySelector("#game").innerHTML = html;
}
