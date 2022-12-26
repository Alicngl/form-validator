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
console.log(form);

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `En az ${min} karakter olmalıdır`);
  } else if (input.value.length > max) {
    error(input, `En fazla ${max} karakter olmalıdır`);
  } else {
    success(input);
  }
}
function checkPassword(input1, input2) {
  if (input1 !== input2) {
    error(input2, "Parolalar eşleşmiyor");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkedRequired([user, email, password, repassword]);
  checkLength(password, 7, 15);
  checkLength(user, 4, 8);
});
