import { onSnakeHead } from "./snake.js";

const enemiesAvailable = [
  {
    name: "&#129434;",
    x: Math.floor(Math.random() * 31) + 1,
    y: Math.floor(Math.random() * 31) + 1,
  },
  {
    name: "&#129413;",
    x: Math.floor(Math.random() * 31) + 1,
    y: Math.floor(Math.random() * 31) + 1,
  },
  {
    name: "&#129428;",
    x: Math.floor(Math.random() * 31) + 1,
    y: Math.floor(Math.random() * 31) + 1,
  },
];

let enemy = {
  name: "&#129428;",
  x: Math.floor(Math.random() * 31) + 1,
  y: Math.floor(Math.random() * 31) + 1,
};

export const getRandomEnemy = () => {
  let index = Math.floor(Math.random() * enemiesAvailable.length);
  enemy = { ...enemiesAvailable[index] };
};

export const hitEnemy =()=>{
    return onSnakeHead(enemy)
}

export const draw = (boardElement) => {
  const enemyElement = document.createElement("div");
  enemyElement.innerHTML = enemy.name;
  enemyElement.style.gridRowStart = enemy.x;
  enemyElement.style.gridColumnStart = enemy.y;
  enemyElement.classList.add("enemy");
  boardElement.appendChild(enemyElement);
};
