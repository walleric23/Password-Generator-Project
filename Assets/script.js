///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

var uppercaseArray = lowercaseArray.map(function (char) {
  return char.toUpperCase();
});

var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  var masterArray = [];
  var userChoice = window.prompt(
    "Select password length between 8-128 characters"
  );

  var passwordLength = parseInt(userChoice);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Not a valid selection");
    return null;
  }

  var lowercase = window.confirm("do you want lowercase letters?");
  var uppercase = window.confirm(" do you want uppercase letters?");
  var numeric = window.confirm("do you want numbers included?");
  var specialCharacters = window.confirm(
    " do you want to include special characters?"
  );

  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    specialCharacters === false
  ) {
    window.alert("Not a valid selection");
    return null;
  }

  if (lowercase === true) {
    masterArray = masterArray.concat(lowercaseArray);
  }
  if (uppercase === true) {
    masterArray = masterArray.concat(uppercaseArray);
  }
  if (numeric === true) {
    masterArray = masterArray.concat(numericArray);
  }
  if (specialCharacters === true) {
    masterArray = masterArray.concat(specialCharactersArray);
  }

  console.log(masterArray);
  return "hi eric!";
}

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
