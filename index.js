let firstCard = 6
let secondCard = 7
let sum = firstCard+secondCard

let hasBlackJack = false
let isAlive = true // to see if they're still alive in the game

if (sum<=20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum===21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false 
}