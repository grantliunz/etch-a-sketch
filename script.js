const container = document.querySelector('#container');

let gridSize = 16;

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
gridContainer.style.cssText = 'background: white; margin:auto; margin-top:20px; margin-bottom:20px; width:960px; height:960px; display: grid; ';
gridContainer.style.gridTemplateColumns = 'auto '.repeat(gridSize);

container.appendChild(gridContainer);


for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.style.cssText = 'border: 1px solid rgba(0, 0, 0, 0.5); border-style: solid solid none none; background:white;'
    gridItem.addEventListener('click', () => { gridItem.style.background = 'black'; });
    gridContainer.appendChild(gridItem);
}
