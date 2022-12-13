function randomNumber()
{
    let random = Math.floor(Math.random() * 255);

    // if (random > 1 && random <= 100)
    // {
    //     return random;
    // }
    // else
    // {
    //     return 16;
    // }

    return random;
}

function resetGrid(numOfColumns)
{
    for(let i = 0; i < numOfColumns; ++i)
    {
        grid.removeChild(grid.firstChild);
    }
}

let grid = document.querySelector('.grid');
let input = document.querySelector('#color-input');
let gridSize = document.querySelector('.btn-size');

let numOfColumns = 16;
makeGrid(numOfColumns);

gridSize.addEventListener('click', () => {

    resetGrid(numOfColumns);

    do{
        numOfColumns = randomNumber();
    } while (numOfColumns < 2 || numOfColumns > 100);

    makeGrid(numOfColumns);
});

function makeGrid(numOfColumns)
{
let numOfBoxes = numOfColumns;
let totalNumOfBoxes = numOfColumns * numOfBoxes;
let column;
let box;

// make columns based on numOfColumns
for (let i = 0; i < numOfColumns; ++i)
{
    column = document.createElement('div');
    column.classList.add('column');
    grid.appendChild(column);
}

let arrayOfColumns = Array.from(document.querySelectorAll('.column'));

// loop through each column
for (let outer = 0; outer < numOfColumns; ++outer)
{
    // add numOfBoxes in each column
    for (let inner = 0; inner < numOfBoxes; ++inner)
    {
        box = document.createElement('div');
        box.classList.add('box', 'border');
        arrayOfColumns[outer].appendChild(box);
    }
}

let arrayOfBoxes = document.querySelectorAll('.box');

let btnErase = document.querySelector('.btn-erase');
btnErase.addEventListener('click', () => {
    for (let i = 0; i < totalNumOfBoxes; ++i)
    {
    arrayOfBoxes[i].addEventListener('mouseover', () => {arrayOfBoxes[i].style.backgroundColor = ''});
    }
});

for (let i = 0; i < totalNumOfBoxes; ++i)
{
    arrayOfBoxes[i].addEventListener('mouseover', () => {arrayOfBoxes[i].style.backgroundColor = input.value});
}

input.addEventListener('click', () => {
    for (let i = 0; i < totalNumOfBoxes; ++i)
{
    arrayOfBoxes[i].addEventListener('mouseover', () => {arrayOfBoxes[i].style.backgroundColor = input.value});
}
});


const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', () => {
    for (let i = 0; i < totalNumOfBoxes; ++i)
    {
    arrayOfBoxes[i].style.backgroundColor = '';
    }
});

const toggleLines = document.querySelector('.btn-toggle-lines');
toggleLines.addEventListener('click', () => {
    for (let i = 0; i < totalNumOfBoxes; ++i)
    {
    arrayOfBoxes[i].classList.toggle("border");
    }
})

let btnRainbow = document.querySelector('.btn-rainbow');
btnRainbow.addEventListener('click', () => {
    

    for (let i = 0; i < totalNumOfBoxes; ++i)
    {
    
    arrayOfBoxes[i].addEventListener('mouseover', () => {
        let x = randomNumber();
        let y = randomNumber();
        let z = randomNumber();
        arrayOfBoxes[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    });

    
    }
})

}

