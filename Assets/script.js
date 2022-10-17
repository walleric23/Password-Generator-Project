///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
// array of lowercase letters
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
// function to turn lowercase to uppercase instead of writing them all out
var uppercaseArray = lowercaseArray.map(function (char) {
  return char.toUpperCase();
});
// numeric array
var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// array of some special characters
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
  // array for selected character types to merge prior to generation
  var masterArray = [];
  // window to ask user how many characters they want utilized in password
  var userChoice = window.prompt(
    "Select password length between 8-128 characters"
  );
  // password length
  var passwordLength = parseInt(userChoice);
  // alerts user if the criteria they selected is unacceptable
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Not a valid selection");
    return null;
  }
  // include lowercase
  var lowercase = window.confirm("do you want lowercase letters?");
  // include uppercase
  var uppercase = window.confirm(" do you want uppercase letters?");
  // include numbers
  var numeric = window.confirm("do you want numbers included?");
  // include special characters
  var specialCharacters = window.confirm(
    " do you want to include special characters?"
  );
  // if they select no on all character types the function doesn't run
  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    specialCharacters === false
  ) {
    window.alert("Not a valid selection");
    return null;
  }
  // merges character types into master array if selected
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
  // randomly selects characters from master array
  console.log(masterArray);
  function getrandomInt(userChoice, masterArray) {
    var newPass = "";
    for (i = 0; i < userChoice; i++) {
      newPass =
        newPass + masterArray[Math.floor(math.random) * masterArray.length];
    }
  }

  passwordText.value = newPass;
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
