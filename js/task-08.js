const inputRef = document.querySelector('input');
const divBoxesRef = document.querySelector('#boxes');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 20;
  const colorRandomizer = () => {
    return `rgb(${Math.floor(Math.random() * 255) + 1}, 
            ${Math.floor(Math.random() * 255) + 1}, 
            ${Math.floor(Math.random() * 255) + 1})`;
  };
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = colorRandomizer();
    box.style.display = 'inline-flex';
    box.style.margin = '5px';

    boxSize += 10;

    boxes.push(box);
  }
  divBoxesRef.append(...boxes);
}

function renderBoxes() {
  divBoxesRef.innerHTML = '';
  createBoxes(inputRef.value);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}
renderBtnRef.addEventListener('click', renderBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
