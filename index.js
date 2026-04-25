let firstCard = 6
let secondCard = 7
let sum = firstCard+secondCard
let cards = [firstCard,secondCard]
let hasBlackJack = false
let isAlive = true // to see if they're still alive in the game
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el") ("body") //need hastag to specify it is an id
// if it's a class, use a ".", so it will be (".sum-el")

function startGame() {
    renderGame()
}

function renderGame() {
sumEl.textContent="Sum: " + sum
cardsEl.textContent = "Cards: " + cards[0]+ " " + cards[1]
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageEl.textContent = message  
}

function newCard(){
    msg = "Drawing a new card from the deck!"
    console.log(msg)

    let card = 2
    sum += card
    startGame()
}