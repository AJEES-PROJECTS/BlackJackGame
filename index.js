let cardsArray = []
let sum = 0
let hasBlavkJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


let player = {
    playerName: "Abdulajees",
    playerPoints: " 145"

}

playerEl.textContent = player.playerName + ":" + " $" + player.playerPoints




function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 1
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }

}

function start() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArray = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum == 21) {
        message = "You have won blackjack !!!"
        hasBlavkJack = true
    } else {
        message = "You are out the game "
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {

    if (isAlive === true && hasBlavkJack === false) {
        let cards = getRandomCard()
        sum += cards
        cardsArray.push(cards)
        renderGame()


    }



}