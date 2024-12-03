const container = document.getElementById('container');
const childContainers = document.querySelectorAll('.child-container');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const childIndex = Math.floor(x / 100) + Math.floor(y / 100) * Math.floor(container.offsetWidth / 100);
  
  childContainers.forEach((child, index) => {
    child.classList.remove('pixelated');
  });

  if (childIndex >= 0 && childIndex < childContainers.length) {
    childContainers[childIndex].classList.add('pixelated');
    
    setTimeout(() => {
      childContainers[childIndex].classList.remove('pixelated');
    }, 200);
  }
});