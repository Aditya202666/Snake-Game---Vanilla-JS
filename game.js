import {
  SNAKE_SPEED,
  draw as drawSnake,
  hitItself,
  outsideGrid,
  getSnakeHead,
  update as updateSnake,
} from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { draw as drawEnemy, hitEnemy } from "./enemy.js";

const boardElement = document.getElementById("board");
let lastRenderTimer;
let gameOver = false;

const main = (currentRenderTime) => {
  if (gameOver) {
    if (confirm("Press OK to reload the Game.")) {
      location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);

  let secondsSinceLastRender = (currentRenderTime - lastRenderTimer) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  update();
  render();
  checkGameOver();
  lastRenderTimer = currentRenderTime;
  console.log("updated");
};

const update = () => {
  updateSnake();
  updateFood();
};

const render = () => {
  drawSnake(boardElement);
  drawFood(boardElement);
  drawEnemy(boardElement);
};
const checkGameOver = () => {
  if (
    hitItself(getSnakeHead()) ||
    outsideGrid() ||
    hitEnemy()
) {
    gameOver = true;
  }
  return;
};

window.requestAnimationFrame(main);
