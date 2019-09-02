let row = 16;
let j = 0;
const column = row;
const grid = document.querySelector('.grid');


//Create Grid

while (j < row) {
    for (i = 0; i < column; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid__element', 'grid__element--hover', 'grid__element--color');
        grid.setAttribute("style", `grid-template-columns: repeat(${column}, 1fr); grid-template-rows: repeat(${row}, 1fr);`)
        document.querySelector(".grid").appendChild(gridElement);
    }
    j++
}

const gridColor = document.querySelector('.grid__element--color');
const gridElements = document.getElementsByClassName(".grid__element--color");

grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid__element')) {
            e.target.setAttribute('style', 'background-color: black;')
        }
    })


// function getRandomColor() {

// }

// function getSelectedColor() {

// }

function resetGrid() {

}
//Buttons

    // Reset

const reset = document.querySelector(".resetBtn");
reset.addEventListener('click', () => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    let newGrid = prompt("Enter new value for your grid");
    if (isNaN(newGrid) || newGrid == ""){
        alert("Invalid value");
        return;
    } else if( newGrid == null) {
        return;
    } else {
        let j = 0;
        grid.setAttribute('style', `grid-template-rows: repeat(${newGrid}, 1fr); grid-template-columns: repeat(${newGrid}, 1fr);`)
        while (j < newGrid) {
            for (i = 0; i < newGrid; i++) {
                const gridElement = document.createElement('div');
                gridElement.classList.add('grid__element', 'grid__element--hover', 'grid__element--color')
                document.querySelector(".grid").appendChild(gridElement);
            }
            j++
        }
    }
})

    //Color button

const colorBtn = document.querySelector('.colorBtn')
colorBtn.addEventListener('change', (e) => {
    const newColor = e.target.value;
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid__element')) {
            e.target.setAttribute('style', `background-color: ${newColor};`)
            }
        })
})

const monoBtn = document.querySelector(".monoBtn")
monoBtn.addEventListener('click', ()=>{
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid__element')) {
            e.target.setAttribute('style', `background-color: black;`)
            }
        })
})