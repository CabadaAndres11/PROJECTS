// script.js
const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(card) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  const cardFront = document.createElement("div");
  cardFront.classList.add("front");
  cardFront.textContent = "?";
  const cardBack = document.createElement("div");
  cardBack.classList.add("back");
  cardBack.textContent = card;
  cardContainer.appendChild(cardFront);
  cardContainer.appendChild(cardBack);
  cardContainer.addEventListener("click", () => flipCard(cardContainer));
  return cardContainer;
}

function flipCard(cardElement) {
    if (!cardElement.classList.contains("flipped") && flippedCards.length < 2) {
      cardElement.classList.add("flipped");
      flippedCards.push(cardElement);
  
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        const value1 = card1.querySelector(".back").textContent;
        const value2 = card2.querySelector(".back").textContent;
  
        if (value1 === value2) {
          card1.removeEventListener("click", flipCard);
          card2.removeEventListener("click", flipCard);
  
          setTimeout(() => {
            card1.classList.add("matched");
            card2.classList.add("matched");
            flippedCards = [];
  
            if (matchedCards.length === cards.length) {
              setTimeout(() => {
                alert("¡Has ganado!");
              }, 500);
            }
          }, 300); // Retrasar la marca de acierto
  
        } else {
          setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
          }, 1000);
        }
      }
    }
  }

function initGame() {
  const memoryGame = document.querySelector(".memory-game");
  shuffle(cards);
  cards.forEach((card) => {
    const cardElement = createCard(card);
    memoryGame.appendChild(cardElement);
  });
}

initGame();
