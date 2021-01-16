var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
  var userObject = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };
  console.log('userObject: v', userObject);

  localStorage.setItem("userObject", JSON.stringify(userObject));
  // TODO: Set new submission to local storage 
  
});

var obj = localStorage.getItem('userObject');
console.log('user object from local stoeage: ', obj);
console.log("user object parsed", JSON.parse(obj));