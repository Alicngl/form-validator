const form = document.getElementById("form");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}
function checkedRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} boş bırakılamaz`);
    } else {
      success(input);
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkedRequired([user, email, password, repassword]);
});
