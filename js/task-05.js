const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

function writeName() {
  if (inputRef.value !== '') {
    textRef.textContent = inputRef.value;
  }
}
inputRef.addEventListener('input', writeName);
