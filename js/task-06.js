const inputRef = document.querySelector('#validation-input');

function checkLength() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
inputRef.addEventListener('blur', checkLength);
