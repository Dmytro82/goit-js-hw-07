const value = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => {
  let counter = --counterValue;
  value.textContent = counter;
};
btnDecrement.addEventListener('click', increment);

const decrement = () => {
  let counter = ++counterValue;
  value.textContent = counter;
};
btnIncrement.addEventListener('click', decrement);
