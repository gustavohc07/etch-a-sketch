//Buttons

//Create Grid

for (i = 0; i < (16*16); i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid__element')
    document.querySelector(".grid").appendChild(grid);
}