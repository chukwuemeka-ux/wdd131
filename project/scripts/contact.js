const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const year = document.querySelector("#current-year");
if (year) year.textContent = `${new Date().getFullYear()}`;

function getInquiryCount() {
  return Number(localStorage.getItem("inquiryCount")) || 0;
}

function showConfirmation(name, service, count) {
  formStatus.textContent = `Thank you, ${name}. Your ${service} inquiry has been prepared. Total inquiries prepared in this browser: ${count}. This form has not sent your message.`;
}

function handleInquiry(event) {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = document.querySelector("#full-name").value.trim();
  const service = document.querySelector("#service").value;
  if (!name || !service) {
    formStatus.textContent = `Please complete the required fields.`;
    return;
  }
  const count = getInquiryCount() + 1;
  localStorage.setItem("inquiryCount", `${count}`);
  showConfirmation(name, service, count);
  contactForm.reset();
}

if (contactForm) contactForm.addEventListener("submit", handleInquiry);
