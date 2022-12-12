let grid = document.querySelector('.grid');

let numOfColumns = 16;
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
        box.classList.add('box');
        arrayOfColumns[outer].appendChild(box);
    }
}

let arrayOfBoxes = document.querySelectorAll('.box');

for (let i = 0; i < totalNumOfBoxes; ++i)
{
    arrayOfBoxes[i].addEventListener('mouseover', () => {arrayOfBoxes[i].style.backgroundColor = 'black'});

}

