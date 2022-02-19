const RandomColorGenerator = () => {
  const randomColorOne = Math.floor(Math.random() * 255);
  const randomColorTwo = Math.floor(Math.random() * 255);
  const randomColorThree = Math.floor(Math.random() * 255);
  const combinedRandomColor = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
  return combinedRandomColor;
};

const gameColor = document.querySelector(".text-node-two");
gameColor.textContent = RandomColorGenerator();
const newColors = document.querySelector(".new-color");

const grid = document.querySelector(".color-palette-grid");

const levels = document.querySelector(".levels").children;

const removeAllBoxes = () => {
  while (grid.firstChild) grid.removeChild(grid.firstChild);
};
const addABox = () => {
  const colorBox = document.createElement("div");
  colorBoxElement = grid.appendChild(colorBox);
  colorBoxElement.classList.add("color-box-one");
  colorBox.style.background = `${RandomColorGenerator()}`;
};

const setGrid = (() => {
  removeAllBoxes();
  for (let i = 0; i < 3; i++) addABox();

  for (let i = 0; i < levels.length; i++) {
    let key = levels[i].name;

    levels[i].addEventListener("click", () => {
      switch (key) {
        case "easy":
          {
            removeAllBoxes();
            for (let i = 0; i < 3; i++) addABox();
            gameColor.textContent = getColor();
          }
          break;
        case "hard":
          {
            removeAllBoxes();
            for (let i = 0; i < 6; i++) addABox();
            gameColor.textContent = getColor();
          }
          break;
      }
    });
  }
})();

const gridItems = grid.children;
let length = gridItems.length;
newColors.addEventListener("click", () => {
  gameColor.textContent = getColor();
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.background = `${RandomColorGenerator()}`;
  }
});
const getColor = () => {
  const arrayOfColors = [];
  for (let i = 0; i < gridItems.length; i++) {
    let cssObject = window.getComputedStyle(gridItems[i]);
    let bgColor = cssObject.backgroundColor;
    arrayOfColors.push(bgColor);
  }
  console.log(arrayOfColors);
  console.log(length);
  const randomColorPosition = Math.floor(Math.random() * length);
  return arrayOfColors[randomColorPosition];
};
