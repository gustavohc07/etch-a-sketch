//Buttons

//Create Grid
let j = 0
while (j<16) {
    for (i = 0; i < 16; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid__element', 'grid__element--hover', 'grid__element--color')
        document.querySelector(".grid").appendChild(grid);
    }
    j++
}

function setBlack() {
    const gridElement = document.querySelector(".grid__element--color");
    gridElement.setAttribute("style", "background-color: black;")
}

// function getRandomColor() {

// }

// function getSelectedColor() {

// }

// function reset {

// }



const blackColor = document.querySelectorAll(".grid__element")
for (i = 0; i < blackColor.length; i++) {
    const divs = blackColor[i];
    divs.addEventListener('mouseover', )
}

console.log(blackColor.length)
