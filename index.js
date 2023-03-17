const beforeLine = document.querySelector('#toolbar-menu-union-icon-before');
const centerLine = document.querySelector('#toolbar-menu-union-icon');
const afterLine = document.querySelector('#toolbar-menu-union-icon-after');
const hamburger = document.querySelector('#toolbar-menu-button');
const menu = document.querySelector('#navigation-list');
const logo = document.querySelector('#logo');
const navItem = document.querySelectorAll('.navigation-item');
var state = false;

function showMenu() {
    centerLine.style.background = 'transparent';
    beforeLine.style.transform = 'rotate(45deg)';
    afterLine.style.transform = 'rotate(-45deg)';
    menu.style.paddingTop = '7vh'
    menu.style.display = 'flex';
    menu.style.background = 'white';
    menu.style.width = '100vw';
    menu.style.height = '100vh';
    logo.style.visibility = 'hidden';
    console.log('Done');
    state = true;
    
}

function removeMenu() {
    menu.style.display = 'none';
    centerLine.style.background = '#28352f';
    beforeLine.style.transform = 'translate(0,8px)';
    afterLine.style.transform = 'translate(0,-8px)';
    logo.style.visibility = 'inherit'   ;
    state = false;
}

hamburger.addEventListener('click', () => {
    if(state) {
        removeMenu();
    }else{
        showMenu();
    }
});

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        removeMenu()
        state = false;
    });
});