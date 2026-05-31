function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "pluxee@form" && password === "pluxee@1350") {

        window.location.href = "form.html";

    } else {

        alert("Invalid Username or Password");

    }
}