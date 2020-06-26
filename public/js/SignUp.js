let email = document.getElementById("email");
let emailerror = document.getElementById("email-error");
let number = document.getElementById("phone-number");
let phoneerror = document.getElementById("phone-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");
let confirmpassword = document.getElementById("confirm-password");
let confirmerror = document.getElementById("confirm-error");
let passwordstrength = document.getElementById("password-strength");

var strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

function validateEmail(){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(mailformat.test(email.value))
    {
        email.style.border = "2px solid green";
        return true;
    }
    else
    {
        email.style.border ="2px solid red";
        emailerror.innerHTML ="Email is Invalid";
        emailerror.style.color ="red";
        return false;
    } 
}

function validatePhone(){

    var phonenumber = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phonenumber.test(number.value))
    {
        number.style.border = "2px solid green";
        phoneerror.innerHTML ="Phone Number is Valid ☺";
        phoneerror.style.color ="green";
        return true;
    }
    else
    {
        number.style.border ="2px solid red";
        phoneerror.innerHTML ="Phone Number is Invalid";
        phoneerror.style.color ="red";
        return false;
    }
}

function validatePassword(){

    var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(passwordexp.test(password.value)) 
    { 
        password.style.border ="2px solid green";
        passworderror.innerHTML = "Password is Good ☺";
        passworderror.style.color = "green";
        return true;
    }
    else
    {  
        password.style.border ="2px solid red";
        passworderror.innerHTML = "Password is Bad ☹";
        passworderror.style.color = "red";
        return false;
    }
}

function validateCheckPassword(){
    if (password.value == confirmpassword.value)
    {
        confirmpassword.style.border ="2px solid green";
        confirmerror.innerHTML = "Password Matched ☺";
        confirmerror.style.color = "green";
        return true;
    }
    else
    {
        confirmpassword.style.border ="2px solid red";
        confirmerror.innerHTML = "Password Unmatched ☹";
        confirmerror.style.color = "red";
        return false; 
    }
}

// password.addEventListener("keyup",function(){
//     var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     var passwordexp1 = /^(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     var passwordexp2 = /^(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     var passwordexp3 = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

//     if(password.value.match(passwordexp)){
//         document.getElementById("passwordstrength").innerHTML = "Strong ☻";
//         document.getElementById("passwordstrength").style.backgroundColor = "green";
//     }
//     else if(password.value.match(passwordexp3)){
//         document.getElementById("passwordstrength").innerHTML = "Good ☺";
//         document.getElementById("passwordstrength").style.backgroundColor = "blue";
//     }
//     else if(password.value.match(passwordexp2)){
//         document.getElementById("passwordstrength").innerHTML = "Weak ☹";
//         document.getElementById("passwordstrength").style.backgroundColor = "yellow";
//     }
//     else if(password.value.match(passwordexp1)){
//         document.getElementById("passwordstrength").innerHTML = "Bad ☹";
//         document.getElementById("passwordstrength").style.backgroundColor = "orange";
//     }
//     else{
//         document.getElementById("passwordstrength").innerHTML = "Worst ☹";
//         document.getElementById("passwordstrength").style.backgroundColor = "red";
//     }
// }
// );