// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// variables 
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ['0','1','2','3','4','5','6','7','8','9']
let special = ["!","@","#","$","%","&","?"]
let fillArr = [];


// asking Qs
function generatePassword(){
  passwordLength = parseInt (prompt('how long would do you want your password to be?'));
  upperCaseLength = confirm('do you want uppercase letters?');
  lowerCaseLength = confirm('lowercase letters?');
  numbersLength = confirm('numbers?');
  specialLength = confirm('any special characters?');

  if (upperCaseLength === true) {
    fillArr = fillArr.concat(upperCase);
  };
  
  if (lowerCaseLength === true) {
    fillArr = fillArr.concat(lowerCase);
  };
  
  if (numbersLength === true) {
    fillArr = fillArr.concat(numbers);
  };
  
  if (specialLength === true) {
    fillArr = fillArr.concat(special);
  };
  
  let thePassword = '';
  
  for (let i = 0; i < passwordLength; i++) {
    let selectChar = Math.floor(Math.random() * fillArr.length);
    selectChar = fillArr[selectChar];
    thePassword = thePassword.concat(selectChar);
  };
  return thePassword;  
};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

// need to create real password 
// need to create generated password as well
// upperCase, lowerCase, number and special vars need to concatted 
