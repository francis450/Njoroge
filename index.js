const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const menuItem = document.querySelectorAll('.menu-item');
const naviconBefore = document.querySelector('.navicon-before');
const naviconAfter = document.querySelector('.navicon-after');

function controlChecked() {
  menu.style.maxHeight = '240px';
  menuIcon.querySelector('.navicon').style.background = 'transparent';
  naviconBefore.style.transform = 'rotate(45deg)';
  naviconBefore.style.transformOrigin = 'left top';
  naviconAfter.style.transform = 'rotate(-45deg)';
  naviconAfter.style.transformOrigin = 'left bottom';
  menuIcon.querySelector('.navIcon-after').style.bottom = '4px';
}

function controlUnchecked() {
  menuBtn.checked = false;
  menu.style.maxHeight = null;
  menuIcon.querySelector('.navicon').style.background = null;
  menuIcon.querySelector('.navicon-before').style.transform = 'rotate(0)';
  menuIcon.querySelector('.navicon-after').style.transform = 'rotate(0)';
}

function check() {
  if (this.checked) {
    controlChecked();
  } else {
    controlUnchecked();
  }
}

menuBtn.addEventListener('click', check);

function removeChecked() {
  controlUnchecked();
}

menuItem.forEach((element) => {
  element.addEventListener('click', removeChecked);
});