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

function generatePassword(){
  console.log("get password")
  // ask for passwordLength
  var passwordLength = prompt("Enter the desired length of your password")
  console.log(passwordLength)

  if(passwordLength < 8 || passwordLength > 128){
    prompt("Password must be less greater that 8 or less than 128 characters.")
  }

  var passwordCharacters = prompt("Enter any special characters you wish to use. (Ex: !, @, $)")
  console.log(passwordCharacters)

  if(isEmptyOrSpaces(passwordCharacters)){
    prompt("You must enter at least one special character.")
  }

  var extras = confirm("Do you want to use upper case, lower case, numbers, and special characters?")
  console.log(extras)
  // validate that its within our requirements
  //conditional Statement in our code
  //if it is not valid 

  // if(its less an 8 or grater than 128){
  //   return "Invalid password length"
  // }


  var finalPassword = ""
  var characters = "@#423SDFwer"
  finalPassword = finalPassword.concat(characters)
  return finalPassword
}

