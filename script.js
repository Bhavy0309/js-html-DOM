let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submintBtn = document.getElementById('submit');
let username = document.getElementById('usernamee');
let emaill = document.getElementById('emaill');
let passwordd = document.getElementById('passwordd');
let submintBtnn = document.getElementById('submitt');

userName.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('userName' , value)
});
email.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('email' , value)
});
password.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('password' , value)
});
submintBtn.addEventListener('click' , function (){
    let userName = localStorage.getItem('userName')
    let password = localStorage.getItem('password')
    let email = localStorage.getItem('email')
    if (username == userName && (passwordd == password) && (emaill == email) ) {
        window.open(index.html)
    }
});

username.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('userName' , value)
});
emaill.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('email' , value)
});
passwordd.addEventListener('change' , function (event){
    let value = event.target.value
    localStorage.setItem('password' , value)
});
submintBtnn.addEventListener('click' , function (){
    let userName = localStorage.getItem('userName')
    let password = localStorage.getItem('password')
    let email = localStorage.getItem('email')
    window.open("login.html")
})

