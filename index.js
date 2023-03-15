const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const menuItem = document.querySelector('.menu-item')

menuBtn.addEventListener('click', function() {
  if (this.checked) {
    controlChecked();
  } else {
    controlUnchecked();
  }
});
function controlChecked(){
  menu.style.maxHeight = '240px';
  menuIcon.querySelector('.navicon').style.background = 'transparent';
}

function controlUnchecked(){
  menuBtn.checked = false;
  menu.style.maxHeight = null;
  menuIcon.querySelector('.navicon').style.background = null;
}


function removeChecked(){
  controlUnchecked();
}