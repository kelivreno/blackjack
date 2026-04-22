let firstCard = 6
let secondCard = 7
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true // to see if they're still alive in the game
let message = ""

function startGame() {

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
console.log(message)
}