// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}


var extrasObj= {

}

function generatePassword(){
  console.log("get password")
  // ask for passwordLength
  var passwordLength = prompt("Enter the desired length of your password")

  if(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Password must be less greater that 8 or less than 128 characters.")
  }

  var passwordCharacters = prompt("Enter any special characters you wish to use. (Ex: !, @, $)")

  if(isEmptyOrSpaces(passwordCharacters)){
    passwordCharacters=prompt("You must enter at least one special character.")
  } 

  if(!containsSpecialChars(passwordCharacters)){
    passwordCharacters=prompt("You must enter at least one special character.")
  } 

  var extras = confirm("Do you want to use upper case, lower case, numbers, and special characters?")
  console.log(extras)
 
  var finalPassword = ""
  for(let i=0; i < passwordLength; i++) {

    
    finalPassword = finalPassword + "\u0046"
    // What we want is to append a character in each itteration to the finalpassword string 
  }

  // var characters = "@#423SDFwer"
  // finalPassword = finalPassword.concat(characters)
  return finalPassword
}


"!):"




