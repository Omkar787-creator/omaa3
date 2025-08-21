function showAlert() {
  alert("Browse our latest cars now!");
}

document.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! We will get back to you soon.");
});
