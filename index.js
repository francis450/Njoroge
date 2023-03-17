const form = document.querySelector('#form');
const email = document.querySelector('#email-input');
const errorMsg = document.querySelector('.error-message');
var state = false
form.onsubmit = () => {
  if (email.value === email.value.toLowerCase()) {
    state = true;
  } else {
    errorMsg.style.display = 'block';
  }
  return state;
};