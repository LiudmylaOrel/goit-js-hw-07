const items = document.querySelectorAll('#categories .item');
const itemsLength = items.length;
console.log(`Number of categories: ${itemsLength}`);

items.forEach(item => {
  const titles = item.querySelector('h2').textContent;
  console.log(`Category: ${titles}`);

  const categories = item.querySelectorAll('li').length;
  console.log(`Elements: ${categories}`);
});
