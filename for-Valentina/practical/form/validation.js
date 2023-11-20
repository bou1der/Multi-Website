const input = document.querySelector('input')
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
input.addEventListener('input', function(){
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
      } else {
        input.style.borderColor = 'red';
      }
});

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}