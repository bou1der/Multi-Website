

const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

document.getElementById('email').textContent = email;

function redirectToSecondPage() {
const email = $('#form-1 [name="email"]').val();
location.href = `str.html?email=${email}`;
}

