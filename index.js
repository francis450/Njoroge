// Define an object to store form data
const formData = {};

// Get all the input fields in the form
const formInputs = document.querySelectorAll('.input');

// Loop through each input field and add an event listener to save data to local storage
formInputs.forEach(input => {
  input.addEventListener('input', () => {
    formData[input.name] = input.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

// Check if there is any data in local storage and pre-fill the input fields with that data
if (localStorage.getItem('formData')) {
  const storedFormData = JSON.parse(localStorage.getItem('formData'));
  formInputs.forEach(input => {
    if (storedFormData[input.name]) {
      input.value = storedFormData[input.name];
    }
  });
}

