function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "1234" && password === "1234") {

        window.location.href = "form.html";

    } else {

        alert("Invalid Username or Password");

    }
}