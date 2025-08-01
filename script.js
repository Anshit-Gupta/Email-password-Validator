let email=document.querySelector("#email");
let password=document.querySelector("#password");

let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError");

let form=document.querySelector("#loginForm");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let isvalid=true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email.value))
    {
        emailError.style.display="inline";
        isvalid=false;
    }
    else{
        emailError.style.display="none";
    }
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/;
    if(!passwordRegex.test(password.value))
    {
        passwordError.style.display="inline";
        isvalid=false;
    }
    else{
        passwordError.style.display="none";
    }

    if(isvalid){
        document.querySelector("#resultmsg").textContent="Email-password is valid";
    }
})