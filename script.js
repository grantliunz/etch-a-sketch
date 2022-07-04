document.body.ondragstart = () => false;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const container = document.querySelector('#container');

let initalGridSize = 32;
let penColor = "black";
const colors = [
    "white",
    "black",
    "grey",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",


];


let gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
gridContainer.style.cssText = 'background-color: white; margin:auto; margin-top:20px; margin-bottom:20px; width:960px; height:960px; display: grid; ';
container.appendChild(gridContainer);


function updateGrid(gridSize) {
    gridContainer = container.removeChild(gridContainer);
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.gridTemplateColumns = 'auto '.repeat(gridSize);


    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.cssText = 'border: 1px solid rgba(0, 0, 0, 0.1); background-color:white;'
        gridItem.setAttribute('draggable', 'false');
        gridItem.addEventListener('mouseover', clickGrid);
        gridItem.addEventListener('mousedown', clickGrid);
        gridContainer.appendChild(gridItem);
    }
    container.appendChild(gridContainer);

}

updateGrid(initalGridSize);



function clickGrid(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (e.target.style.backgroundColor == '#777') return
    e.target.style.backgroundColor = `${penColor}`;
}

const optionsContainer = document.querySelector("#optionsContainer");

const reset = document.createElement('button');
reset.style.cssText = "width:100px; height:50px; margin:10px"
reset.textContent = "Reset";
reset.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach((item) => {
        item.style.background = 'white';
    });
});
optionsContainer.appendChild(reset);

let sizeInput = document.createElement('input');
sizeInput.style.cssText = "width:150px; height:20px; margin:10px 0 2px 10px;"
sizeInput.setAttribute('placeholder', 'Enter grid size (1-100)');
sizeInput.setAttribute('type', 'number');
sizeInput.setAttribute('id', 'sizeInput');
sizeInput.setAttribute('onkeypress', 'enterSizeInput(event)');
function enterSizeInput(ele) {
    if (ele.keyCode === 13) {
        let size = document.getElementById('sizeInput').value;
        document.getElementById('sizeInput').value = null;
        if (size > 0 & size < 101) updateGrid(size);
    }
}
optionsContainer.appendChild(sizeInput);

const sizeButton = document.createElement('button');
sizeButton.style.cssText = "width:100px; height:20px; margin-left:10px;";
sizeButton.textContent = "Update";
sizeButton.addEventListener('click', () => {
    let size = document.getElementById('sizeInput').value;
    document.getElementById('sizeInput').value = null;
    if (size > 0 & size < 101) updateGrid(size)
});

optionsContainer.appendChild(sizeButton);

const colorContainer = document.createElement('div');
colorContainer.style.cssText = "display:flex; margin-top:30px; margin-left:10px; display: grid; grid-template-columns:auto auto auto; gap:10px";


for (color of colors) {
    console.log(color);
    let colorSelector = document.createElement('button');
    colorSelector.style.cssText = `background:${color}; width:50px; height:50px; border:none`
    colorSelector.addEventListener('click', () => {
        penColor = colorSelector.style.background;
    });
    colorContainer.appendChild(colorSelector);

}


optionsContainer.appendChild(colorContainer);

