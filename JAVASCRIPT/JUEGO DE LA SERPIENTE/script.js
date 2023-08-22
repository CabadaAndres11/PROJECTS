const snake = document.getElementById("snake");
const gameContainer = document.querySelector(".game-container");
const scoreDisplay = document.getElementById("score");

let snakeX = 0;
let snakeY = 0;
let snakeDX = 20;
let snakeDY = 0;
let snakeSegments = [{ x: 0, y: 0 }];
let foodX = 0;
let foodY = 0;
let score = 0;

function moveSnake() {
  snakeX += snakeDX;
  snakeY += snakeDY;
  if (snakeX >= gameContainer.offsetWidth) snakeX = 0;
  if (snakeY >= gameContainer.offsetHeight) snakeY = 0;
  if (snakeX < 0) snakeX = gameContainer.offsetWidth - 20;
  if (snakeY < 0) snakeY = gameContainer.offsetHeight - 20;

  snake.style.left = snakeX + "px";
  snake.style.top = snakeY + "px";

  for (let i = snakeSegments.length - 1; i > 0; i--) {
    snakeSegments[i] = { ...snakeSegments[i - 1] };
  }
  snakeSegments[0] = { x: snakeX, y: snakeY };
  updateSnakeSegments();
}

function generateFood() {
  foodX = Math.floor(Math.random() * (gameContainer.offsetWidth / 20)) * 20;
  foodY = Math.floor(Math.random() * (gameContainer.offsetHeight / 20)) * 20;
  food.style.left = foodX + "px";
  food.style.top = foodY + "px";
}

function checkCollision() {
  if (
    snakeX === foodX &&
    snakeY === foodY
  ) {
    generateFood();
    const newSegment = { x: snakeSegments[snakeSegments.length - 1].x, y: snakeSegments[snakeSegments.length - 1].y };
    snakeSegments.push(newSegment);
    updateSnakeSegments();
    updateScore();
  }
}

function updateScore() {
  score++;
  scoreDisplay.textContent = score;
}

function updateSnakeSegments() {
  const snakeElements = document.querySelectorAll(".snake");
  snakeElements.forEach((segment, index) => {
    segment.style.left = snakeSegments[index].x + "px";
    segment.style.top = snakeSegments[index].y + "px";
  });

  if (snakeSegments.length > snakeElements.length) {
    const newSegment = document.createElement("div");
    newSegment.className = "snake";
    gameContainer.appendChild(newSegment);
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      snakeDX = 0;
      snakeDY = -20;
      break;
    case "ArrowDown":
      snakeDX = 0;
      snakeDY = 20;
      break;
    case "ArrowLeft":
      snakeDX = -20;
      snakeDY = 0;
      break;
    case "ArrowRight":
      snakeDX = 20;
      snakeDY = 0;
      break;
  }
});

generateFood();
const gameInterval = setInterval(() => {
  moveSnake();
  checkCollision();
}, 150);
