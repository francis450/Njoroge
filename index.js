const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const menuItem = document.querySelectorAll('.menu-item')
menuBtn.addEventListener('click', check);

function controlChecked() {
  menu.style.maxHeight = '240px';
  menuIcon.querySelector('.navicon').style.background = 'transparent';
}

function controlUnchecked() {
  menuBtn.checked = false;
  menu.style.maxHeight = null;
  menuIcon.querySelector('.navicon').style.background = null;
}

function check() {
  if (this.checked) {
    controlChecked();
  } else {
    controlUnchecked();
  }
}

menuItem.forEach(element => {
  element.addEventListener('click',removeChecked);
});

function removeChecked() {
  controlUnchecked();
}