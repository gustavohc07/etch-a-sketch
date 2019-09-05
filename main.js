const grid = document.querySelector('.grid');
const reset = document.querySelector(".resetBtn");
const colorBtn = document.querySelector('.colorBtn')
const monoBtn = document.querySelector(".monoBtn")
const partyBtn = document.querySelector(".partyBtn");
const shadeBtn = document.querySelector('.shadeBtn');
const hoverBtn = document.querySelector(".hover__paint");
const clickBtn = document.querySelector(".click__paint");
let picker = false;
let black = true;
let party = false;
let shade = false;
let activate = "";
let brightness = 100;
let decrement = 10;


// Functions


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

function removeAllListeners() {
    grid.removeEventListener('mouseover', setBlackColor)
    grid.removeEventListener('mouseover', setRandomColor)
    grid.removeEventListener('mouseover', setSelectColor)
    grid.removeEventListener('click', setBlackColor)
    grid.removeEventListener('click', setRandomColor)
    grid.removeEventListener('click', setSelectColor)
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
    }
}

function setRandomColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: ${getRandomColor()}`)
    }
}

function setBlackColor(e) {
    if (e.target.classList.contains('grid__element')) {
        e.target.setAttribute('style', `background-color: black;`);
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
    }else {
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
    }else {
        grid.addEventListener('mouseover', setRandomColor)
    }
}

function activateBlackColor() {
    picker = false;
    black = true;
    party = false;
    shade = false;
    removeAllListeners()
    if (activate !== "") {
        setWayToPaint()
    }else {
        grid.addEventListener('mouseover', setBlackColor)
    }
}

function setWayToPaint() {
    if (activate == "Hover Activated") {
        removeAllListeners()
        if (black == true) {
            grid.addEventListener('mouseover', setBlackColor);
        } else if (party == true) {
            grid.addEventListener('mouseover', setRandomColor);
        } else if (picker == true) {
            grid.addEventListener('mouseover', setSelectColor)
        }
    } else if (activate == "Click Activated") {
        removeAllListeners()
        if (black == true) {
            grid.addEventListener('click', setBlackColor);
        } else if ( party == true) {
            grid.addEventListener('click', setRandomColor);
        } else if (picker == true) {
            grid.addEventListener('click', setSelectColor);
        }
    } else {
        return 'mouseover'
    }
}

function shadeElement(e) {
    if (e.target.style.filter > `brightness(0%)`) {
        brightness -= decrement;
        e.target.style.filter = `brightness(${brightness}%`;
        return;
    }
}

// Event Listeners


createDefaultGrid();

grid.addEventListener('mouseover', setBlackColor);

reset.addEventListener('click', resetGrid)

colorBtn.addEventListener('change', activateSelectColor);

colorBtn.addEventListener("click", activateSelectColor);

monoBtn.addEventListener('click', activateBlackColor);

partyBtn.addEventListener('click', activatePartyColor);

shadeBtn.addEventListener('click', () => {
    removeAllListeners();
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains("grid__element")) {
            e.target.style.filter = `brightness(${brightness}%)`;
            shadeElement(e);
            // e.target.setAttribute('style', `background-color: white;`);
        }
    })
    return;
})

hoverBtn.addEventListener('click', ()=>{
    activate = "Hover Activated";
    console.log(activate);
    setWayToPaint();
})

clickBtn.addEventListener('click', ()=>{
    activate = "Click Activated";
    console.log(activate);
    setWayToPaint();
})