const form = document.querySelector('#form');
const email = document.querySelector('#email-input');
const errorMsg = document.querySelector('.error-message');

// Check if there is any data in local storage and pre-fill the input fields with that data
if (localStorage.getItem('formData')) {
  const storedFormData = JSON.parse(localStorage.getItem('formData'));
  formInputs.forEach(input => {
    if (storedFormData[input.name]) {
      input.value = storedFormData[input.name];
    }
  });
}
form.onsubmit= () => {
    if(email.value === email.value.toLowerCase()) {
        return true;
    } else {
        errorMsg.style.display = 'block';
        return false;
    }
};