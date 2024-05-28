const username = document.getElementById("username");
const email = document.getElementById("emailaddress");
const password_user = document.getElementById("userpassword");
const btnlog = document.getElementById("btn-login");

const confirmLogin = localStorage.getItem("login");

verifAcc();

function verifAcc() {
    if (confirmLogin === "true") {
        window.location.href = "../";
    }
}

window.onload = function () {
    username.focus();
};

btnlog.addEventListener("click", function () {
    if (
        username.value === "" &&
        email.value === "" &&
        password_user.value === ""
    ) {
        alert(
            "Invalid entry for username\nInvalid entry for email address\nInvalid entry for password. 6 characters minumum"
        );
    } else if (username.value === "" && password_user.value === "") {
        alert(
            "Invalid enrty for username\nInvalid entry for password. 6 characters minumum"
        );
    } else if (username.value === "" && email.value === "") {
        alert("Invalid entry for username\nInvalid entry for email address");
    } else if (username.value === "") {
        alert("Invalid entry for username");
    } else if (email.value === "" && password_user.value === "") {
        alert(
            "Invalid entry for email address\nInvalid entry for password. 6 characters minumum"
        );
    } else if (email.value === "") {
        alert("Invalid entry for email address");
    } else if (password_user.value === "") {
        alert("Invalid entry for password. 6 characters minumum");
    } else if (!email.value.includes("@")) {
        alert("Please include an '@' in the email address");
    } else if (password_user.value.length < 6) {
        alert("Invalid entry for password. 6 characters minumum");
    } else {
        const registered_username = localStorage.setItem(
            "username",
            username.value
        );
        const registered_email = localStorage.setItem("email", email.value);
        const registered_password = localStorage.setItem(
            "password",
            password_user.value
        );
        alert("Registration Completed! Thank you for registering!");
        window.location.href = "../login";
    }
});
