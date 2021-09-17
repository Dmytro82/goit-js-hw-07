const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function sizeControl() {
  textRef.style.fontSize = inputRef.value + 'px';
}
inputRef.addEventListener('input', sizeControl);
