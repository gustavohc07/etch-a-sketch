const grid = document.querySelector('.grid');
const shadeBtn = document.querySelector('.shadeBtn');
const partyBtn = document.querySelector(".partyBtn");
const monoBtn = document.querySelector(".monoBtn")
const colorBtn = document.querySelector('.colorBtn')
const reset = document.querySelector(".resetBtn");

function createDefaultGrid() {
    let j = 0;
    let row = 16;
    const column = row;
    while (j < row) {
        for (i = 0; i < column; i++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid__element', 'grid__element--hover', 'grid__element--color');
            gridElement.setAttribute("style", "background-color: white;")
            grid.setAttribute("style", `grid-template-columns: repeat(${column}, 1fr); grid-template-rows: repeat(${row}, 1fr);`)
            document.querySelector(".grid").appendChild(gridElement);
        }
        j++
    }
}


function resetGrid() {
    let newGrid = prompt("Enter new value for your grid");
    if (isNaN(newGrid) || newGrid == "") {
        alert("Invalid value");
        return;
    } else if (newGrid == null) {
        return;
    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.lastChild);
        }
        let j = 0;
        grid.setAttribute('style', `grid-template-rows: repeat(${newGrid}, 1fr); grid-template-columns: repeat(${newGrid}, 1fr);`)
        while (j < newGrid) {
            for (i = 0; i < newGrid; i++) {
                const gridElement = document.createElement('div');
                gridElement.classList.add('grid__element', 'grid__element--color')
                gridElement.setAttribute("style", "background-color: white;")
                document.querySelector(".grid").appendChild(gridElement);
            }
            j++
        }
    }
}


function removeAllListeners() {
    grid.removeEventListener('mouseover', setBlackColor)
    grid.removeEventListener('mouseover', setRandomColor)
    grid.removeEventListener('mouseover', setSelectColor)
}

function getRandomColor() {
    const hexaCode = "ABCDEF0123456789";
    let hexaColor = "#";
    for (i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexaCode.length)
        hexaColor += hexaCode.charAt(randomValue);
    }
    return hexaColor;
}

function setSelectColor(e) {
    if (e.target.classList.contains('grid__element')) {
        const newColor = colorBtn.value;
        e.target.setAttribute('style', `background-color: ${newColor};`)
        console.log("Ola Cor Selecionada")
    }
}

function activateSelectColor() {
    removeAllListeners();
    grid.addEventListener('mouseover', setSelectColor);
}

function setRandomColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: ${getRandomColor()}`)
        console.log("ola party")
    }
}

function setBlackColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: black;`);
        console.log("ola")
    }
}

function activatePartyColor() {
    removeAllListeners()
    grid.addEventListener('mouseover', setRandomColor);
    console.log("Party Ativado")
}

function activateBlackColor() {
    removeAllListeners()
    grid.addEventListener('mouseover', setBlackColor)
    console.log("Preto Ativado")
}

createDefaultGrid();

grid.addEventListener('mouseover', setBlackColor);

reset.addEventListener('click', resetGrid)

colorBtn.addEventListener('change', activateSelectColor);
colorBtn.addEventListener("click", activateSelectColor);

monoBtn.addEventListener('click', activateBlackColor);

partyBtn.addEventListener('click', activatePartyColor)

shadeBtn.addEventListener('click', () => {
    removeAllListeners();
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains("grid__element")) {
            let brightness = 100;
            e.target.style.filter = `brightness(${brightness - 50}%)`;
            // e.target.setAttribute('style', `background-color: white;`);
        }
    })
})