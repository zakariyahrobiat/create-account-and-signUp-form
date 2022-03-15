form = document.getElementById("form");
username = document.getElementById("username");
email = document.getElementById("email");
password = document.getElementById("password");
cPassword = document.getElementById("Cpassword");
sigInEmail = document.getElementById("sign-in-email");
signInpassword = document.getElementById("sign-in-password")
signInContainer = document.getElementById("log-in")
signContainer = document.querySelector(".sign-container")
createContainer = document.querySelector(".create-container")
createAccount = document.getElementById("create-account")
signForm = document.getElementById("sign-form")



signInContainer.addEventListener("click", ()=>{

    signContainer.classList.toggle("active")
    createContainer.classList.toggle("action")
})

createAccount.addEventListener("click",()=>{
    createContainer.classList.toggle("passive")
    signContainer.classList.toggle("passion")
    
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    confirmInput()
   

})
signForm.addEventListener("submit",(e)=>{
e.preventDefault()
checkInput()
})

function confirmInput(){
    usernameValue = username.value.trim()
    emailValue = email.value.trim()
    passwordValue = password.value.trim()
    cPasswordValue = cPassword.value.trim()
   

    if (usernameValue === ""){
      setError(username, "username cannot be blank")  
    }
    else{
        setSuccess(username)
    }

    if(emailValue === ""){
setError(email, "email cannot be blank")
    }
    else{
        setSuccess(email)
    }

    if (passwordValue === ""){
        setError(password, "password cannot be blank")
    }
    else{
        setSuccess(password)
    }

    if (cPasswordValue === ""){
        setError(cPassword, "password cannot be blank")

    }
    else if(cPasswordValue !== passwordValue){
        setError(cPassword, "password does not match")
    }
    else{
        setSuccess(cPassword)
    }

   

   
}

function checkInput(){
    sigInEmailValue = sigInEmail.value.trim()
    signInpasswordValue = signInpassword.value.trim()
if (sigInEmailValue === ""){
    setError(sigInEmail, "email cannot be blank")
}
else if(sigInEmailValue !== emailValue){
    setError(sigInEmail, "email incorrect")
}
else{
    setSuccess(sigInEmail)
}
if(signInpasswordValue === ""){
    setError(signInpassword, "password cannot be blank")
}
else if (signInpasswordValue !== passwordValue ){
    setError(signInpassword, "password incorrect")
}
else{ 
    setSuccess(signInpassword)
}
}
function setError(input, message){
    formControl = input.parentElement;
    small = formControl.querySelector("small")
    small.innerHTML = message
    formControl.classList = 'form-control error'
}
function setSuccess(input){
    formControl = input.parentElement;
    formControl.classList = "form-control success"
}

