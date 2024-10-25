let inputDirection = { x: 0, y: 0 };
let lastInput = { x: 0, y: 0 };

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInput.x !== 0) return;
      inputDirection = { x: -1, y: 0 };

      break;
    case "ArrowDown":
      if (lastInput.x !== 0) return;
      inputDirection = { x: 1, y: 0 };
      break;
    case "ArrowLeft":
      if (lastInput.y !== 0) return;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowRight":
      if (lastInput.y !== 0) return;
      inputDirection = { x: 0, y: 1 };
      break;
  }
});

export const getDirection = () => {
  lastInput = inputDirection;
  return lastInput;
};
