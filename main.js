//Create Grid
const grid = document.querySelector('.grid');

function createDefaultGrid() {
    let j = 0;
    let row = 16;
    const column = row;
    while (j < row) {
        for (i = 0; i < column; i++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid__element', 'grid__element--hover', 'grid__element--color');
            grid.setAttribute("style", `grid-template-columns: repeat(${column}, 1fr); grid-template-rows: repeat(${row}, 1fr);`)
            document.querySelector(".grid").appendChild(gridElement);
        }
        j++
    }
}
createDefaultGrid();

const gridColor = document.querySelector('.grid__element--color');
const gridElements = document.getElementsByClassName(".grid__element--color");

grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', 'background-color: black;')
    }
})


//Buttons

// Reset

function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
}

const reset = document.querySelector(".resetBtn");
reset.addEventListener('click', () => {
    let newGrid = prompt("Enter new value for your grid");
    if (isNaN(newGrid) || newGrid == "") {
        alert("Invalid value");
        return;
    } else if (newGrid == null) {
        return;
    } else {
        resetGrid();
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

//Color buttons

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
monoBtn.addEventListener('click', () => {
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid__element')) {
            e.target.setAttribute('style', `background-color: black;`)
        }
    })
})

function getRandomColor() {
    const hexaCode = "ABCDEF0123456789";
    let hexaColor = "#";
    for (i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexaCode.length)
        hexaColor += hexaCode.charAt(randomValue);
    }
    return hexaColor;
}


const partyBtn = document.querySelector(".partyBtn");
partyBtn.addEventListener('click', () => {
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid__element')) {
            e.target.setAttribute('style', `background-color: ${getRandomColor()}`)
        }
    })
})

const shadeBtn = document.querySelector('.shadeBtn');
shadeBtn.addEventListener('click', () =>{
    grid.addEventListener('mouseover', (e) =>{
        if(e.target.classList.contains("grid__element")){
            let brightness = 100;
            e.target.style.filter = `brightness(${brightness - 10}%)`;
            brightness -= 10;
            console.log(e.target)
        }
    })
})