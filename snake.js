import { getDirection } from "./input.js";
export let SNAKE_SPEED = 1;
const SNAKE_SPEED_INCREASE = 0.2;

let expansion_rate = 0;
let snakeComponents = [{ x: 16, y: 16 }];

export const update = () => {
  const direction = getDirection();
  addNewSegments();
  for (let i = snakeComponents.length - 2; i >= 0; i--) {
    snakeComponents[i + 1] = {...snakeComponents[i]};
    
  }
  snakeComponents[0].x += direction.x;
  snakeComponents[0].y += direction.y;
};

export const expandSnake = (times) => {
  expansion_rate = times;
  SNAKE_SPEED += SNAKE_SPEED_INCREASE;
};

const addNewSegments = () => {
  for (let i = 0; i < expansion_rate; i++) {
    snakeComponents.push({ ...snakeComponents[snakeComponents.length - 1] });
  }
  expansion_rate = 0
};

const checkCollision = (collider, ignoreHead = false) => {
  return snakeComponents.some((component, index) => {
    if (ignoreHead && index === 0) return false;
    return component.x === collider.x && component.y === collider.y;
  });
};

export const onSnakeBody=(pos1)=>{
  return checkCollision(pos1)
}

export const onSnakeHead = (pos) => {
  return snakeComponents[0].x === pos.x && snakeComponents[0].y === pos.y;
};

export const getSnakeHead = () => {
  return snakeComponents[0];
};

export const hitItself = (head) => {
  return checkCollision(head, true)
};

export const outsideGrid = () => {
  return (
    snakeComponents[0].x < 1 ||
    snakeComponents[0].x > 31 ||
    snakeComponents[0].y < 1 ||
    snakeComponents[0].y > 31
  );
};

export const draw = (boardElement) => {
  boardElement.innerHTML = "";
  snakeComponents.forEach((component, index) => {
    const divElement = document.createElement("div");
    divElement.style.gridRowStart = component.x;
    divElement.style.gridColumnStart = component.y;
    if (index === 0) {
      divElement.classList.add("head");
    } else {
      divElement.classList.add("body");
    }
    boardElement.appendChild(divElement);
  });
};
