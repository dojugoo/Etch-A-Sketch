//Making square grid using flexbox
const container = document.querySelector("#container");

//Nested for loops to create grid of div squares
for (let i = 0; i < 25; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 25; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }
}

//Add event listener to mouse hover for all boxes
let boxes = document.querySelectorAll(".box");
boxes.forEach(function(value) {
    value.addEventListener("mouseenter", changeBox);
});

//Adds alteredbox class to hovered boxes
function changeBox(e) {
    e.target.classList.add("alteredbox");
}
