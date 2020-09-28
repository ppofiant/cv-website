var validName = "true";
var validEmail = "true";
var validPhone = "true";

function validateName() {
  var firstName = document.getElementById("first-name");
  var lastName = document.getElementById("last-name");
  var firstText = firstName.value;
  var lastText = lastName.value;

  if (firstText.length <= 0) {
    validName = "false";
  } else if (lastText <= 0) {
    validName = "false";
  } else {
    validName = "true";
  }
}

function validateEmail() {
  var email = document.getElementById("email");
  var text = email.value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (text.match(pattern)) {
    email.style.border = "none";
    validEmail = "true";
  } else {
    validEmail = "false";
  }
}

function validatePhoneNum() {
  var phone = document.getElementById("phone-num");
  var text = phone.value;
  var pat = "+62";

  if (!(pat == text.substring(0, 3)) || text.length <= 8) {
    validPhone = "false";
  } else {
    validPhone = "true";
  }
}

function validateAll() {
  validateName();
  validateEmail();
  validatePhoneNum();

  if (validName == "true" && validPhone == "true" && validEmail == "true") {
    return true;
  } else {
    return false;
  }
}

setInterval(() => {
  var btn = document.getElementById("button_send");
  if (validateAll() == true) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
