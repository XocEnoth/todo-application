let loginbutton = document.getElementById("login");

loginbutton.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "hamka.main@gmail.com" && password === "hamkaalpuket") {
        window.location.href = "app";
    } else if (email === "www.hafidzm@gmail.com" && password === "hafidz") {
        window.location.href = "app";
    } else if (email === "hafidzmushhafa@gmail.com" && password === "hamka") {
        window.location.href = "app";
    } else {
        alert("You have entered an invalid login.");
    }
});
