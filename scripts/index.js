// This function is used to generate a random color

const RandomColorGenerator = () => {
  const randomColorOne = Math.floor(Math.random() * 255);
  const randomColorTwo = Math.floor(Math.random() * 255);
  const randomColorThree = Math.floor(Math.random() * 255);
  const combinedRandomColor = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
  return combinedRandomColor;
};
const grid = document.querySelector(".color-palette-grid");
const gridItems = grid.children;
const statusDiv = document.querySelector("#status");
const messageNode = document.querySelector(".message");
const SendMessage = (message) => {
  return message;
};

const removeAllBoxes = () => {
  while (grid.firstChild) grid.removeChild(grid.firstChild);
};
const addABox = () => {
  const colorBox = document.createElement("div");
  colorBoxElement = grid.appendChild(colorBox);
  colorBoxElement.classList.add("color-box-one");
  colorBox.style.background = `${RandomColorGenerator()}`;
};
const HandleClick = () => {
  let arrayGrid = [];
  for (let i = 0; i < gridItems.length; i++) arrayGrid.push(gridItems[i]);
  arrayGrid.forEach((ele) => {
    ele.addEventListener("click", () => {
      if (WinDecide(ele)) {
        messageNode.textContent = SendMessage("You won");
        setTimeout(() => {
          messageNode.textContent = "";
        }, 2000);
      } else if (!WinDecide(ele)) {
        ele.classList.add("fade-in")
        // ele.remove();
        arrayGrid.length = arrayGrid.length - 1;
        console.log(arrayGrid);
        messageNode.textContent = SendMessage("Sorry Try Again");
        setTimeout(() => {
          messageNode.textContent = "";
        }, 2000);
      }
    });
  });
};

const levels = document.querySelector(".levels").children;
removeAllBoxes();
  for (let i = 0; i < 3; i++) addABox();
  HandleClick();
const setGrid = () => {
  
  for (let i = 0; i < levels.length; i++) {
    let key = levels[i].name;

    levels[i].addEventListener("click", () => {
      switch (key) {
        case "easy":
          {
            removeAllBoxes();
            for (let i = 0; i < 3; i++) {
              addABox();
            }

            gameColor.textContent = getColor();
            HandleClick();
            return key;
            
          }
          break;
        case "hard":
          {
            removeAllBoxes();
            for (let i = 0; i < 6; i++) addABox();
            gameColor.textContent = getColor();
            HandleClick();
            return key;
          }
          break;
          
      }
    });
  }
};
setGrid();

const getColor = () => {
  const arrayOfColors = [];
  for (let i = 0; i < gridItems.length; i++) {
    let bgColor = gridItems[i].style.backgroundColor;
    arrayOfColors.push(bgColor);
  }
  const randomColorPosition = Math.floor(Math.random() * gridItems.length);
  return arrayOfColors[randomColorPosition];
};

const WinDecide = (item) => {
  let bgColor = item.style.backgroundColor;
  let winColor = gameColor.textContent;
  if (bgColor === winColor) return true;
  else if (bgColor !== winColor) return false;
};
const newColors = document.querySelector(".new-color");

const gameColor = document.querySelector(".text-node-two");
gameColor.textContent = getColor();
console.log(setGrid)
newColors.addEventListener("click", () => {
  if (gridItems.length === 6 || gridItems.length === 3)
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.background = `${RandomColorGenerator()}`;
    }
  else {
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.background = `${RandomColorGenerator()}`;
    }
  }

  gameColor.textContent = getColor();
});
