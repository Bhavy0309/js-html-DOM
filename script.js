let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submintBtn = document.getElementById('submit');


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
    if (userName == 'example' && (password == '1234') && (email == 'example@gmail.com') ) {
        window.location.href='main.html'
    }
});




