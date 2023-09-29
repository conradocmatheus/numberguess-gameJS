let randomNumber = Math.floor(Math.random() * 10) + 1
let guesses = 0

document.getElementById("submitBtn").onclick = function () {

    let guess = document.getElementById("guessField").value
    guesses += 1

    if (guess == randomNumber) {
        alert(`${randomNumber} is the #. It took you ${guesses} guesses`)
    }
    else if (guess < randomNumber) {
        alert("Too Small!!")
    }
    else {
        alert("Too Big!!")
    }
}