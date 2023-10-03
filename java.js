 const grid = document.getElementsByClassName("grids");
const clear = document.getElementById('reset-button');
const title = document.getElementById('title');
const colorwheel = document.getElementById('colorPicker')


clear.onclick = () => reloadGrid();
let color = "#ffffff";

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
document.getElementById('colorPicker').addEventListener('input', myColor);


function createGrid(size) {
    grid[0].style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid[0].style.gridTemplateRows = `repeat(${size}, 1fr)`
    var rows = [];
    for (let i = 0; i < size * size; i++) {
        rows[i] = document.createElement("div");
        rows[i].classList.add("case");
        rows[i].style.backgroundColor = "#000000";
        rows[i].addEventListener("mousedown", paint);
        rows[i].addEventListener("mouseover", paint);
        grid[0].appendChild(rows[i]);
    }

}

function paint(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return
    } else {
        e.target.style.backgroundColor = color;
    }

}

function reloadGrid() {
    clearGrid()
    let size = window.prompt("enter grid size");
    console.log(typeof(size));
    if (size < 0 || size > 64) {
        size = 64;
        createGrid(size)
    }else{
    createGrid(size)
    }
}

function clearGrid() {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ""
}
function myColor() {
    color = document.getElementById('colorPicker').value;
    grid[0].style.boxShadow = `${color} 0px 0px 20px 3px`;
    title.style.textShadow = `${color} 0px 0px 5px`;
    colorwheel.style.backgroundColor = color;
}


createGrid(64);


