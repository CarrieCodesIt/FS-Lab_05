// GLOBAL VARIABLES
let userChoice = prompt('Enter Rock, Paper or Scissors').toUpperCase()
let compChoice = Math.floor(Math.random()*3);

if (compChoice === 0) {
    compChoice = 'ROCK'
} else if (compChoice === 1) {
    compChoice = 'PAPER'
} else {
    compChoice = 'SCISSORS'
}

if (userChoice == compChoice) {             //tie
    alert(`${userChoice} is the same as ${compChoice} ... You tied!`)
} else if (userChoice == 'ROCK') {          //user is ROCK
    if (compChoice == 'PAPER') {            //lost to paper
        alert(`${compChoice} beats ${userChoice} ... You lost!`)
    } else {                                //beats scissors
        alert(`${userChoice} destroys ${compChoice} ... You won!`)
    }
} else if (userChoice == 'PAPER') {         //user is PAPER
    if (compChoice == 'ROCK') {             //beats rock
        alert(`${userChoice} covers ${compChoice} ... You won!`)
    } else {                                //lost to scissors
        alert(`${compChoice} cuts ${userChoice} ... You lost!`)
    }
} else if (userChoice == 'SCISSORS') {      //user is SCISSORS
    if (compChoice == 'ROCK') {             //lost to rock
        alert(`${compChoice} destroys ${userChoice} ... You lost!`)
    } else {                                //beats paper
        alert(`${userChoice} cuts ${compChoice} ... You won!`)
    }
} else {                                    //user enters incorrect answer
    alert('Not correctly entering your answer ... automatic lose!')
}


