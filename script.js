const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
}


let grid = document.querySelectorAll(".grid");
grid.forEach(grids => {
    grids.addEventListener("mouseover", () => grids.style.backgroundColor = "grey");
});

function hoverGrey(){
    let grid = document.querySelectorAll(".grid");
grid.forEach(grids => {
    grids.addEventListener("mouseover", () => grids.style.backgroundColor = "grey");
});
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid);

function resetGrid() {
    grid.forEach(grids => {
        grids.style.backgroundColor = "white"
    });
    let gridSize = prompt("Enter size of grid: ");
    if (gridSize > 64 || gridSize <= 0) {
        alert("Invalid Size (Range is 1 to 64)");
    }
    else {
        container.innerHTML = "";
        createGrid(Number(gridSize));

    }
}

function createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        newDiv.style.width = `${512 / gridSize}px`;
        newDiv.style.height = `${512 / gridSize}px`;
        container.appendChild(newDiv);
    }
    container.style.cssText = `grid-template-columns: repeat(${gridSize},1fr); grid-template-rows: repeat(${gridSize},1fr);`;
    hoverGrey();

}




