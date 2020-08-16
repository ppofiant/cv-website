var validName = "true";
var validEmail = "true";
var validPhone = "true";

function validateName() {
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var firstText = firstName.value;
    var lastText = lastName.value;

    if (firstText.length <= 0) {
        firstName.style.border = "2px solid red";
        validName = "false";
    }
    else if (lastText <= 0) {
        lastName.style.border = "2px solid red";
        validName = "false"
    }
    else {
        lastName.style.border = "none";
        firstName.style.border = "none";
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
    }
    else {
        validEmail = "false";
        email.style.border = "2px solid red";
    }
}

function validatePhoneNum() {
    var phone = document.getElementById("phone-num");
    var text = phone.value;
    var pat = '+62';

    if (!(pat == text.substring(0, 3))) {
        validPhone = "false";
        phone.style.border = "2px solid red";
    }
    else {
        validPhone = "true";
        phone.style.border = "none";
    }
}

function validateAll() {
    validateName();
    validateEmail();
    validatePhoneNum();

    if (validName == "true" && validPhone == "true" && validEmail == "true") {
        return alert("Success");
    }
    else {
        return alert("Not Success. Please try again");
    }
}