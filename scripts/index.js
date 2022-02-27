// This function is used to generate a random color
var key = "easy";

const grid = document.querySelector(".color-palette-grid");
const newColors = document.querySelector(".new-color");
const playAgain = document.querySelector(".play-again");
const gridItems = grid.children;
const colorGameDiv = document.querySelector("#color-game-header");
const messageNode = document.querySelector(".message");
const header = document.querySelector("#color-game-header");

const RandomColorGenerator = () => {
  const randomColorOne = Math.floor(Math.random() * 255);
  const randomColorTwo = Math.floor(Math.random() * 255);
  const randomColorThree = Math.floor(Math.random() * 255);
  const combinedRandomColor = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
  return combinedRandomColor;
};

const SendMessage = (message) => {
  return message;
};

const removeAllBoxes = () => {
  while (grid.firstChild) grid.removeChild(grid.firstChild);
};

const addABox = (colorBoxBgColor = `${RandomColorGenerator()}`) => {
  const colorBox = document.createElement("div");
  colorBoxElement = grid.appendChild(colorBox);
  colorBoxElement.classList.add("color-box-one");
  colorBox.style.background = colorBoxBgColor;
};

const HandleClick = () => {
  let arrayGrid = [];
  for (let i = 0; i < gridItems.length; i++) arrayGrid.push(gridItems[i]);
  arrayGrid.forEach((ele) => {
    ele.addEventListener("click", () => {
      if (WinDecide(ele)) {
        newColors.classList.toggle("active");
        playAgain.classList.toggle("active");
        messageNode.textContent = SendMessage("correct");
        const eleColor = ele.style.backgroundColor;
        colorGameDiv.setAttribute("style", `background-color:${eleColor}`);
        if (window.key === "easy") {
          removeAllBoxes();
          for (let i = 0; i < 3; i++) {
            addABox(eleColor);
          }
        } else if (window.key === "hard") {
          removeAllBoxes();
          for (let i = 0; i < 6; i++) {
            addABox(eleColor);
          }
        }
        setTimeout(() => {
          messageNode.textContent = "";
        }, 3000);
        newColors.classList.remove("isDisabled");
      } else if (!WinDecide(ele)) {
        newColors.classList.add("isDisabled");

        ele.classList.add("fade-in");
        messageNode.textContent = SendMessage("try again");
        setTimeout(() => {
          messageNode.textContent = "";
        }, 3000);
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
            window.key = key;
            removeAllBoxes();
            for (let i = 0; i < 3; i++) {
              addABox();
            }

            gameColor.textContent = getColor();
            HandleClick();
          }
          break;
        case "hard":
          {
            window.key = key;
            removeAllBoxes();
            for (let i = 0; i < 6; i++) addABox();
            gameColor.textContent = getColor();
            HandleClick();
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

const gameColor = document.querySelector(".text-node-two");
gameColor.textContent = getColor();
newColors.addEventListener("click", () => {
  if (window.key === "easy") {
    for (let i = 0; i < 3; i++) {
      gridItems[i].style.background = `${RandomColorGenerator()}`;
    }
  } else if (window.key === "hard") {
    for (let i = 0; i < 6; i++) {
      gridItems[i].style.background = `${RandomColorGenerator()}`;
    }
  }

  gameColor.textContent = getColor();
});
playAgain.addEventListener("click", () => {
  if (window.key === "easy") {
    removeAllBoxes();
    for (let i = 0; i < 3; i++) {
      addABox();
    }

    gameColor.textContent = getColor();
    HandleClick();
  } else if (window.key === "hard") {
    removeAllBoxes();
    for (let i = 0; i < 6; i++) addABox();
    gameColor.textContent = getColor();
    HandleClick();
  }
  playAgain.classList.toggle("active");
  newColors.classList.toggle("active");
});
