const form = document.querySelector("#form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const password = document.querySelector("#password")
const conPassword = document.querySelector("#conPassword")
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,46}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(firstName.value.length > 1 && 
      lastName.value.length > 1 &&
      email.value.match(regexEmail) && 
      phone.value.length === 11 &&
      password.value.match(regexPassword) && 
      conPassword.value === password.value
    ) {
      alert('Done!!!😊😊😊😊😊')
    }else {
      alert('Error!!!😥😥😥😥😥')
    }
})
let result = false;

firstName.addEventListener("input", () => {
  if(firstName.value.length > 1) {
    firstName.parentElement.className = "success"
   
  }else{
    firstName.parentElement.className = "error"
  }
  
})

lastName.addEventListener("input", () => {
  if(lastName.value.length > 1) {
    lastName.parentElement.className = "success"
   
  }else{
    lastName.parentElement.className = "error"
  }
  
})

email.addEventListener("input", () => {


  if (email.value.match(regexEmail)) {
    email.parentElement.className = "success"
   
  }else{
    email.parentElement.className = "error"
  }
  
})

phone.addEventListener("input", () => {

  if (phone.value.length === 11) {
    phone.parentElement.className = "success"
   
  }else{
    phone.parentElement.className = "error"
  }
  
})


password.addEventListener("input", () => {
    
  if (password.value.match(regexPassword)) {
    password.parentElement.className = "success"
   
  }else{
    password.parentElement.className = "error"
  }
  
})

conPassword.addEventListener("input", () => {

  if (conPassword.value === password.value) {
    conPassword.parentElement.className = "success"
   
  }else{
    conPassword.parentElement.className = "error"
  }
  
})



