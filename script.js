// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var passwordLength = prompt("Enter the desired length of your password")
  while (Number.parseInt(passwordLength) < 8 || Number.parseInt(passwordLength) > 128){
    passwordLength = prompt("Password must be greater than 8 or less than 128 characters.")
  }

  var confirmCharacters = confirm("Confirm if you would like to use uppercase, lowercaser, numbers, and special characters.")
  var listOfCharacters = ""
  
  if (confirmCharacters) {
    listOfCharacters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  } else {
    listOfCharacters= 'abcdefghijklmnopqrstuvwxyz0123456789'
  }
  

  var finalPassword = ""
  for(let i=0; i < passwordLength; i++) {
    finalPassword += listOfCharacters.charAt(Math.floor(Math.random() * listOfCharacters.length));
  }
    
  return finalPassword
}






