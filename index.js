// Отримуємо доступ до кнопки
const button = document.querySelector('.menu-button');

button.addEventListener('click', onClick);

function onClick() {
  console.log('Ти клікнув');
}
