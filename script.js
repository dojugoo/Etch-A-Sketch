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

