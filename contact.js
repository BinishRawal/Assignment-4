const form = document.getElementById("sampleform");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();

  const message = this.message ? this.message.value.trim() : "";

  const contactData = { name, email, message };


  localStorage.setItem("contactData", JSON.stringify(contactData));


  window.location.href = "data.html";
});
