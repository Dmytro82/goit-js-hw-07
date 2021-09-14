const items = document.querySelectorAll('.item');

console.log(`В списке ${items.length} категории.`);

items.forEach(element => {
  console.log(`Категория: ${element.childNodes[1].innerHTML}`);
  console.log(`Количество элементов: ${element.childNodes[3].children.length}`);
});
