const btnRainbow = document.querySelector(".btn-rainbow");
const btnGray = document.querySelector(".btn-gray");
const btnReset = document.querySelector(".btn-reset");
const btnErase = document.querySelector(".btn-erase");
const toggleLines = document.querySelector(".btn-toggle-lines");
const grid = document.querySelector(".grid");
const input = document.querySelector("#color-input");
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector(".show-value");

function randomNumber() 
{
  let random = Math.floor(Math.random() * 360);
  return random;
}

function resetGrid(numOfColumns) 
{
  for (let i = 0; i < numOfColumns; ++i) 
  {
    grid.removeChild(grid.firstChild);
  }
}

let numOfColumns = 16;

function makeGrid(numOfColumns) 
{
  let numOfBoxes = numOfColumns;
  let column;
  let box;

  // make columns based on numOfColumns
  for (let i = 0; i < numOfColumns; ++i) {
    column = document.createElement("div");
    column.classList.add("column");
    grid.appendChild(column);
  }

  let arrayOfColumns = Array.from(document.querySelectorAll(".column"));

  // loop through each column
  for (let outer = 0; outer < numOfColumns; ++outer) {
    // add boxes in each column based on numOfBoxes
    for (let inner = 0; inner < numOfBoxes; ++inner) {
      box = document.createElement("div");
      box.classList.add("box", "border");
      arrayOfColumns[outer].appendChild(box);
    }
  }

  // make buttons for each grid
  // this function is too long but more efficient when the grid is resizing using the slider
  // i have tried to split it into another function but that caused a lot of problems with slider
  let arrayOfBoxes = Array.from(document.querySelectorAll(".box"));
  let totalBoxes = arrayOfBoxes.length;

  input.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].addEventListener("mouseover", () => {
        arrayOfBoxes[i].style.backgroundColor = input.value;
      });
    }
  });

  // default color is black
  for (let i = 0; i < totalBoxes; ++i) {
    arrayOfBoxes[i].addEventListener("mouseover", () => {
      arrayOfBoxes[i].style.backgroundColor = input.value;
    });
  }

  btnRainbow.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].addEventListener("mouseover", () => {
        arrayOfBoxes[
          i
        ].style.backgroundColor = `hsl(${randomNumber()}, 100%, 50%)`;
      });
    }
  });

  let grayPercent = 90;

  btnGray.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].addEventListener("mouseover", () => {
        if (grayPercent === 0) {
          grayPercent = 90;
        }
        arrayOfBoxes[i].style.backgroundColor = `hsl(0, 0%, ${--grayPercent}%)`;
      });
    }
  });

  btnReset.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].style.backgroundColor = "";
    }
  });

  btnErase.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].addEventListener("mouseover", () => {
        arrayOfBoxes[i].style.backgroundColor = "";
      });
    }
  });

  toggleLines.addEventListener("click", () => {
    for (let i = 0; i < totalBoxes; ++i) {
      arrayOfBoxes[i].classList.toggle("border");
    }
  });
}

// default grid
makeGrid(numOfColumns);

slider.addEventListener("input", () => {
  resetGrid(numOfColumns);
  numOfColumns = slider.value;
  sliderOutput.textContent = `${slider.value} X ${slider.value}`;
  makeGrid(numOfColumns);
});
