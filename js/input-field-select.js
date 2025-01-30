// Add additional behavior to the dropdown input field
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.contact-form-input.is-select');

    // Add placeholder behavior
    dropdown.classList.add('placeholder'); // Add placeholder class initially

    dropdown.addEventListener('change', function () {
      if (dropdown.value) {
        dropdown.classList.remove('placeholder');
        dropdown.classList.add('selected');
      } else {
        dropdown.classList.remove('selected');
        dropdown.classList.add('placeholder');
      }
    });

    // Focus outline consistency for the checkbox
    const checkbox = document.querySelector('.form_checkbox-icon-style');
    checkbox.addEventListener('focus', function () {
      checkbox.style.boxShadow = '0 0 0 2px rgba(0, 0, 255, 0.2)';
    });
    checkbox.addEventListener('blur', function () {
      checkbox.style.boxShadow = 'none';
    });
  });
