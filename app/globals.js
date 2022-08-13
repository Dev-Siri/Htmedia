const unsupportedBtns = document.querySelectorAll('[data-btn-unsupported]');
const createBtn = document.querySelector('[data-btn-create]');
const homeBtn = document.querySelector('[data-btn-home]');

unsupportedBtns.forEach((unsupportedBtn) => {
  unsupportedBtn.onclick = () => (window.location.href = '/views/Auth.html');
});

createBtn.onclick = () => (window.location.href = '/views/Create.html');
homeBtn.onclick = () => (window.location.href = '/');
