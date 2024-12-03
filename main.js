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
    }, 200);
}

childContainer.forEach(item => {
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
});