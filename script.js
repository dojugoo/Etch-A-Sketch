//Making square grid using flexbox
const container = document.querySelector("#container");

//Constants
let gridsize = 20;
createGrid(gridsize);
boxes();

//Prompt button for grid size
const btn = document.querySelector("#grid");
btn.addEventListener("click", gridFunction);

//Clears grid, remake grid and restart script
function gridFunction() {
    let a = prompt("Enter value for grid size up to 100:");
    while (a > 100) {
        a = prompt("Enter value for grid size up to 100:");
    }
    gridsize = a;
    //Clears grid within container
    const removal = document.querySelector("#container");
    removal.textContent = '';
    createGrid(gridsize); //creates new grid with user specified number
    boxes();
}

//Nested for loops to create grid of div squares
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }
}

//Add event listener to mouse hover for all boxes
function boxes() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(value) {
        value.addEventListener("mouseenter", changeBox);
    });
}

//Adds alteredbox class to hovered boxes
function changeBox(e) {
    e.target.classList.add("alteredbox");
}
