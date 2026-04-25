let firstCard = getRandomCard()
let secondCard = getRandomCard()
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

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1
    return randomCard
}

function startGame() {
    renderGame()
}

function renderGame() {
sumEl.textContent="Sum: " + sum
cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length ; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
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
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    startGame()
}