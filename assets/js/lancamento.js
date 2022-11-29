function getFormData(form) {
  const formData = new FormData(form);
  window.sessionStorage.setItem("novo", JSON.stringify(Object.fromEntries(formData)));
  window.location.href = 'dashboard.html'
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  getFormData(e.target);
});
