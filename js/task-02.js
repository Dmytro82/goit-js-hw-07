const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients');

const element = [...ingredients].forEach(el => {
  const Item = document.createElement('li');
  Item.textContent = el;
  ingredientsUl.appendChild(Item);
});
