const container = document.getElementById('container');

const fragment = document.createDocumentFragment();
let number = 100 * 100
for (let i = 0; i < number; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('child-container');
    fragment.appendChild(newDiv);
}

container.appendChild(fragment);

const childContainer = document.querySelectorAll('.child-container');

function handleMouseEnter(event) {
    event.target.classList.add('pixelated');
}

function handleMouseLeave(event) {
    setTimeout(() => {
    event.target.classList.remove('pixelated');
    }, 75);
}

childContainer.forEach(item => {
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
});

let isDrawing = false;

function handleMouseDown(event) {
    isDrawing = true;
    event.target.classList.add('drawing');
}

function handleMouseMove(event) {
    if (isDrawing) {
        event.target.classList.add('drawing')
    }
}

function handleMouseUp(event) {
    isDrawing = false;
    event.target.classList.remove('drawing')
}

childContainer.forEach(item => {
    item.addEventListener('mousedown', handleMouseDown);
    item.addEventListener('mouseup', handleMouseUp);
    item.addEventListener('mousemove', handleMouseMove);
});

function clearDrawing(event) {
    if (event.key === " ") {
        window.location.reload()
    }
}

window.addEventListener('keydown', clearDrawing);
