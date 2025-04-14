// Insert your code here
const registerBtn = document.getElementById("register");
const connectionBtn = document.getElementById("connection");

registerBtn.addEventListener('click', function() {
    const registerName = document.getElementById("registerName").value
    const registerEmail = document.getElementById("registerEmail").value
    const registerPassword = document.getElementById("registerPassword").value

    const userData = {
        name: registerName,
        email: registerEmail,
        password: registerPassword
    }

    fetch("http://localhost:3000/users/signup", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(() => {
        window.location.assign("index.html")
    })
})

connectionBtn.addEventListener('click', function() {
    const connectionEmail = document.getElementById("connectionEmail").value
    const connectionPassword = document.getElementById("connectionPassword").value

    const userData = {
        email: connectionEmail,
        password: connectionPassword
    }

    fetch("http://localhost:3000/users/signin", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(() => {
        window.location.assign("index.html")
    })
})