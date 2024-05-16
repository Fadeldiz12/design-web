document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('success');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      let valid = true;
      
      form.querySelectorAll('[required]').forEach(function(input) {
          if (!input.value) {
              input.nextElementSibling.textContent = input.getAttribute('data-validation-required-message');
              valid = false;
          } else {
              input.nextElementSibling.textContent = '';
          }
      });

      if (valid) {
          // Handle form submission
          successMessage.textContent = 'Thank you for contacting us!';
          successMessage.classList.add('alert', 'alert-success');
          form.reset();
      }
  });

  form.querySelectorAll('[required]').forEach(function(input) {
      input.addEventListener('input', function() {
          if (input.value) {
              input.nextElementSibling.textContent = '';
          }
      });
  });
});
