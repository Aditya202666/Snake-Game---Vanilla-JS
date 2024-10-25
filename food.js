import { onSnakeBody, onSnakeHead, expandSnake } from "./snake.js";
import { getRandomEnemy } from "./enemy.js";

const EXPANSION_RATE = 1;
const foodsAvailable = [
  { name: "&#128036;", x: 0, y: 0 },
  { name: "&#128000;", x: 0, y: 0 },
  { name: "&#129713;", x: 0, y: 0 },
  { name: "&#128012;", x: 0, y: 0 },
  { name: "&#128007;", x: 0, y: 0 },
  { name: "&#128019;", x: 0, y: 0 },
  { name: "&#129422;", x: 0, y: 0 },
  { name: "&#128038;", x: 0, y: 0 },
];

let foods = [
    { name: "&#128038;", x: 15, y: 19 },
    { name: "&#129422;", x: 10, y: 13 },
    { name: "&#128000;", x: 25, y: 5 },
];

const getRandomFood=(n, idx)=>{
        for(let i=0; i<n; i++){

            while(onSnakeBody(foods[idx? idx : i])){
                const randomIndex = Math.floor(Math.random() * foodsAvailable.length);
                foods[idx? idx : i] = {...foodsAvailable[randomIndex]}
                foods[idx? idx : i].x = Math.floor(Math.random()*31)+1
                foods[idx? idx : i].y = Math.floor(Math.random()*31)+1
            }
        }
    
}
getRandomFood(3);

export const update = () => {
    foods.forEach((fd, idx)=>{

        if(onSnakeHead(fd)){
            getRandomFood(1, idx);
            getRandomEnemy();
            expandSnake(EXPANSION_RATE)
        }
    })
};


export const draw = (boardElement) => {
    foods.forEach(food =>{

        const foodElement = document.createElement("div");
        foodElement.innerHTML = food.name;
        foodElement.style.gridRowStart = food.x;
        foodElement.style.gridColumnStart = food.y;
        foodElement.classList.add("food");
        boardElement.appendChild(foodElement);
    })
};

