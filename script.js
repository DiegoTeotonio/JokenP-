const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScroreNumber = 0
let machineScroreNumber = 0

const playhuman = (humanChoice) => {

    PLayTheGame(humanChoice, PlayMachine())

}

const PlayMachine = () => {

    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const PLayTheGame = (human, machine) => {


    if (human === machine) {

        result.innerHTML = " DEU EMPATE! "
    }


    else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScroreNumber++
        humanScore.innerHTML = humanScroreNumber
        result.innerHTML = "VOCÊ GANHOU !"
    }

    else {
        machineScroreNumber++
        machineScore.innerHTML = machineScroreNumber
        result.innerHTML = "VOCÊ PERDEU PARA A ALEXIA!"

    }


}