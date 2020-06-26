let username = document.getElementById("username");
let usererror = document.getElementById("user-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");

function validateUsername(){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mailformat.test(username.value))
    {
        username.style.border = "2px solid green";
        return true;
    }
    else
    {
        username.style.border ="2px solid red";
        usererror.innerHTML ="Username is Invalid ☹";
        usererror.style.color ="red";
        return false;
    } 
}

function validatePassword(){

    var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(passwordexp.test(password.value)) 
    { 
        password.style.border ="2px solid green";
        passworderror.innerHTML = "Password is Right ☺";
        passworderror.style.color = "green";
        return true;
    }
    else
    {  
        password.style.border ="2px solid red";
        passworderror.innerHTML = "Password is Wrong ☹";
        passworderror.style.color = "red";
        alert('Hi there!☺: Use username: email-id | Pwd: numb,cap,smlLtr & symbl | For admin Usr:\"admin@library.com\" | Pwd:\"Admin.12345\"');
        return false;
    }
}
