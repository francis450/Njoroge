const menu = document.querySelector('.menu');
const menuList = menu.querySelectorAll('li');
const checkbox = document.getElementById('menu-btn');

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    checkbox.checked = false;
  });
});