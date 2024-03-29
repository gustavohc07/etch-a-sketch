const grid = document.querySelector('.grid');
const reset = document.querySelector(".resetBtn");
const colorBtn = document.querySelector('.colorBtn');
const monoBtn = document.querySelector(".monoBtn");
const partyBtn = document.querySelector(".partyBtn");
const shadeBtn = document.querySelector('.shadeBtn');
const hoverBtn = document.querySelector(".hover__paint");
const clickBtn = document.querySelector(".click__paint");
let picker = false;
let black = true;
let party = false;
let shade = false;
let activate = "";

createDefaultGrid();

const gridElement = document.querySelectorAll(".grid__element");

// Functions

function removeAllListeners() {
    grid.removeEventListener('mouseover', setBlackColor);
    grid.removeEventListener('mouseover', setRandomColor);
    grid.removeEventListener('mouseover', setSelectColor);
    grid.removeEventListener('mouseover', setShade);
    grid.removeEventListener('click', setBlackColor);
    grid.removeEventListener('click', setRandomColor);
    grid.removeEventListener('click', setSelectColor);
    grid.removeEventListener('click', setShade)
}

function createDefaultGrid() {
    let j = 0;
    let row = 16;
    const column = row;
    grid.setAttribute("style", `grid-template-columns: repeat(${column}, 1fr); grid-template-rows: repeat(${row}, 1fr);`);
    while (j < row) {
        for (i = 0; i < column; i++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid__element', 'grid__element--hover', 'grid__element--color');
            gridElement.setAttribute("style", "background-color: white;");
            document.querySelector(".grid").appendChild(gridElement);
        }
        j++
    }
}

function resetGrid() {
    let newGrid = prompt("Enter new value for your grid");
    if (isNaN(newGrid) || newGrid == "") {
        alert("Invalid value");

    } else if (newGrid == null) {

    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.lastChild);
        }
        let j = 0;
        grid.setAttribute('style', `grid-template-rows: repeat(${newGrid}, 1fr); grid-template-columns: repeat(${newGrid}, 1fr);`);
        while (j < newGrid) {
            for (i = 0; i < newGrid; i++) {
                const gridElement = document.createElement('div');
                gridElement.classList.add('grid__element', 'grid__element--color');
                gridElement.setAttribute("style", "background-color: white;");
                document.querySelector(".grid").appendChild(gridElement);
            }
            j++
        }
    }
}

function getRandomColor() {
    const hexaCode = "ABCDEF0123456789";
    let hexaColor = "#";
    for (i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexaCode.length);
        hexaColor += hexaCode.charAt(randomValue);
    }
    return hexaColor;
}

function setBrightness() {
    for (i = 0; i < gridElement.length; i++) {
        gridElement[i].style.filter = 'brightness(100%)';
    }
}


function setSelectColor(e) {
    if (e.target.classList.contains('grid__element')) {
        const newColor = colorBtn.value;
        e.target.setAttribute('style', `background-color: ${newColor}; filter: brightness(100%)`)
    }
}

function setRandomColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: ${getRandomColor()}; filter: brightness(100%);`)
    }
}

function setBlackColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: black;`);
    }
}

function setShade(e) {
    if (e.target.classList.contains("grid__element")) {
        e.target.style.filter = `brightness(${(e.target.style.filter.match(/\d+/g))-10}%)`
    }
}

function activateSelectColor() {
    picker = true;
    black = false;
    party = false;
    shade = false;
    removeAllListeners();
    if (activate !== "") {
        setWayToPaint()
    } else {
        grid.addEventListener('mouseover', setSelectColor)
    }
}

function activatePartyColor() {
    picker = false;
    black = false;
    party = true;
    shade = false;
    removeAllListeners();
    if (activate !== "") {
        setWayToPaint()
    } else {
        grid.addEventListener('mouseover', setRandomColor)
    }
}

function activateBlackColor() {
    picker = false;
    black = true;
    party = false;
    shade = false;
    removeAllListeners();
    if (activate !== "") {
        setWayToPaint()
    } else {
        grid.addEventListener('mouseover', setBlackColor)
    }
}

function activateShadeBtn() {
    picker = false;
    black = false;
    party = false;
    shade = true;
    removeAllListeners();
    if (activate !== "") {
        setWayToPaint()
    } else {
        grid.addEventListener('mouseover', setShade)
    }
}

function setWayToPaint() {
    if (activate === "Hover Activated") {
        removeAllListeners();
        if (black === true) {
            grid.addEventListener('mouseover', setBlackColor);
        } else if (party === true) {
            grid.addEventListener('mouseover', setRandomColor);
        } else if (picker === true) {
            grid.addEventListener('mouseover', setSelectColor)
        } else if (shade === true) {
            grid.addEventListener('mouseover', setShade)
        }
    } else if (activate === "Click Activated") {
        removeAllListeners();
        if (black === true) {
            grid.addEventListener('click', setBlackColor);
        } else if (party === true) {
            grid.addEventListener('click', setRandomColor);
        } else if (picker === true) {
            grid.addEventListener('click', setSelectColor);
        } else if (shade === true) {
            grid.addEventListener('click', setShade);
        }
    } else {
        return 'mouseover'
    }
}

// Event Listeners

setBrightness();

grid.addEventListener('mouseover', setBlackColor);

reset.addEventListener('click', resetGrid);

colorBtn.addEventListener('change', activateSelectColor);

colorBtn.addEventListener("click", activateSelectColor);

monoBtn.addEventListener('click', activateBlackColor);

partyBtn.addEventListener('click', activatePartyColor);

shadeBtn.addEventListener('click', activateShadeBtn);


hoverBtn.addEventListener('click', () => {
    activate = "Hover Activated";
    console.log(activate);
    setWayToPaint();
});

clickBtn.addEventListener('click', () => {
    activate = "Click Activated";
    console.log(activate);
    setWayToPaint();
});