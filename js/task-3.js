const form = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

form.addEventListener('input', e => {
  const name = form.value.trim();
  if (name === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = name;
  }
});
