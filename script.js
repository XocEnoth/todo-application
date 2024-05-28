const registered_username = localStorage.getItem("username");
const registered_email = localStorage.getItem("email");
const registered_password = localStorage.getItem("password");
const confirmLogin = localStorage.getItem("login");

verifAcc();

function verifAcc() {
    if (
        registered_email &&
        registered_username &&
        registered_password &&
        confirmLogin === "true"
    ) {
    } else {
        window.location.href = "login/";
    }
}

const btn_logout = document.getElementById("logout");

btn_logout.addEventListener("click", function () {
    localStorage.setItem("login", "false");
    window.location.href = "login/";
});
