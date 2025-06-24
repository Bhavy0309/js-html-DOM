let username = document.getElementById('usernamee');
let emaill = document.getElementById('emaill');
let passwordd = document.getElementById('passwordd');
let submintBtnn = document.getElementById('submitt');

let userNameValue = null
let emailValue = null
let passwordValue = null

window.addEventListener('load', function () {
    localStorage.removeItem('email')
    localStorage.removeItem('userName')
    localStorage.removeItem('password')
});


username.addEventListener('change', function (event) {
    userNameValue = event.target.value
    localStorage.setItem('userName', userNameValue)
});

emaill.addEventListener('change', function (event) {
    emailValue = event.target.value
    localStorage.setItem('email', emailValue)
});

passwordd.addEventListener('change', function (event) {
    passwordValue = event.target.value
    localStorage.setItem('password', passwordValue)
});

submintBtnn.addEventListener('click', function () {
    let usernamee = localStorage.getItem('userName')
    let passwordd = localStorage.getItem('password')
    let emaill = localStorage.getItem('email')
    if (userNameValue === null) {
        alert('enter your username first')
    } else if (passwordValue === null) {
        alert('Enter your password')
    } else if (emailValue === null) {
        alert("enter your email")
    } else {
        window.location.href='login.html'
    }
});

