const username_email = document.getElementById("useremail");
const password_user = document.getElementById("userpassword");
const btnlog = document.getElementById("btn-login");

const registered_username = localStorage.getItem("username");
const registered_email = localStorage.getItem("email");
const registered_password = localStorage.getItem("password");

const confirmLogin = localStorage.getItem("login");

verifAcc();

function verifAcc() {
    if (confirmLogin === "true") {
        window.location.href = "../";
    }
}

window.onload = function () {
    username_email.focus();
};

btnlog.addEventListener("click", function () {
    if (username_email.value === "" && password_user.value === "") {
        alert(
            "Username or email address is required.\nNew password is required."
        );
    } else if (username_email.value === "") {
        alert("Username or email address is required.");
    } else if (password_user.value === "") {
        alert("New password is required.");
    } else if (password_user.value.length < 6) {
        alert("Invalid entry for password. 6 characters minumum");
    } else if (username_email.value === registered_username) {
        alert("Recovery password Completed!");
        localStorage.setItem("password", password_user.value);
        window.location.href = "../login";
    } else if (username_email.value === registered_email) {
        alert("Recovery password Completed!");
        localStorage.setItem("password", password_user.value);
        window.location.href = "../login";
    } else {
        alert("Incorrect username or email address.");
    }
});
