const message = "Merci pour votre message. Nous vous répondrons rapidement.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });