let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false // to see if they're still alive in the game
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el") ("body") //need hastag to specify it is an id
// if it's a class, use a ".", so it will be (".sum-el")

function getRandomCard() {
    let randomcard = Math.floor( Math.random()*13 ) + 1
    if (randomcard === 1) {
        // if 1     -> return 11
        return 11
    } else if (randomcard >=11 && randomcard <=13) {
        // if 11-13 -> return 10
        return 10
    } else {
        return randomcard
    }
}

function startGame() {
    isAlive = true
    // Generate two random numbes
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards.pop(firstCard,secondCard)
    cards.push(firstCard,secondCard)
    sum = 0
    sum += firstCard + secondCard
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