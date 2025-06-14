// Simple form validation and feedback
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "#c72c41";
      return;
    }

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "#c72c41";
      return;
    }

    formMessage.textContent = "Thank you! We'll get in touch soon.";
    formMessage.style.color = "#1ebea5";
    form.reset();
  });
});