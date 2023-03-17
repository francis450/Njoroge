const form = document.querySelector('#form');
const email = document.querySelector('#email-input');
const errorMsg = document.querySelector('.error-message');

form.onsubmit = () => {
  if (email.value === email.value.toLowerCase()) {
    return true;
  } else {
    errorMsg.style.display = 'block';
    return false;
}
};