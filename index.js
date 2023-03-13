const menu = document.querySelector('.menu');
const menu_list = menu.querySelectorAll('li');
const checkbox = document.getElementById('menu-btn');

menu_list.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
    });
});