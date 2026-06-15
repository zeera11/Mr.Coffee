function validateForm() {
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const addon = document.getElementById('addon').value.trim();
  const total = document.getElementById('total').value.trim();

  // Reset errors
  document.getElementById('errorName').textContent = "";
  document.getElementById('errorEmail').textContent = "";
  document.getElementById('errorAddress').textContent = "";
  document.getElementById('errorAddon').textContent = "";
  document.getElementById('errorTotal').textContent = "";

  if (name === "") {
    document.getElementById('errorName').textContent = "Name is required.";
    valid = false;
  }

  if (email === "" || !email.includes('@')) {
    document.getElementById('errorEmail').textContent = "Valid email is required.";
    valid = false;
  }

  if (address === "") {
    document.getElementById('errorAddress').textContent = "Address is required.";
    valid = false;
  }

  if (addon === "") {
    document.getElementById('errorAddon').textContent = "Please select an add-on.";
    valid = false;
  }

  if (total === "" || Number(total) <= 0) {
    document.getElementById('errorTotal').textContent = "Total price must be greater than 0.";
    valid = false;
  }

  // Jika semua valid, redirect ke halaman menu
  if (valid) {
    window.location.href = "menu-all.html";
  }

  return false; // Cegah form submit normal
}
