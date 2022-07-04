let mouseDown = 0;
document.body.onmousedown = function () {
    mouseDown = 1;
}
document.body.onmouseup = function () {
    mouseDown = 0;
}

const container = document.querySelector('#container');

let gridSize = 100;
// let mouseDown = false;

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
gridContainer.style.cssText = 'background: white; margin:auto; margin-top:20px; margin-bottom:20px; width:960px; height:960px; display: grid; ';
gridContainer.style.gridTemplateColumns = 'auto '.repeat(gridSize);
// gridContainer.addEventListener('mousedown', () => { mouseDown = true });
// gridContainer.addEventListener('mouseup', () => { mouseDown = false });

container.appendChild(gridContainer);



for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.style.cssText = 'border: 1px solid rgba(0, 0, 0, 0.5); border-style: solid solid none none; background:white;'
    gridItem.addEventListener('mouseenter', () => {
        if (mouseDown) { gridItem.style.background = 'black'; }

    });
    gridItem.addEventListener('mousedown', () => {
        gridItem.style.background = 'black';

    });

    gridContainer.appendChild(gridItem);
}

const optionsContainer = document.querySelector("#optionsContainer");

const reset = document.createElement('button');
reset.style.cssText = "width:100px; height:50px"
reset.textContent = "Reset";
reset.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.gridItem');
    console.log('test1');
    gridItems.forEach((item) => {
        item.style.background = 'white';
        console.log('test2');
    });
});
optionsContainer.appendChild(reset);