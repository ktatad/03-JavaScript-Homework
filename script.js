// Assignment Code

var generateBtn = document.querySelector("#generate");

var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var lowerCharsNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var upperCharsNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

function generatePassword() {
  var passwordLength = window.prompt("Number of characters in password? (8-128 characters REQUIRED)");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Password requires 8-128 characters.");
  }

  var upperCase = window.confirm("Uppercase letters in password?");
  var numbers = window.confirm("Numbers in password?");
  let password = '';

  if (numbers === true && upperCase === true) {
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword = upperCharsNum[Math.floor(Math.random() * upperCharsNum.length)];
      password = password.toString() + generatedPassword.toString();
    }
  }
  
  else if (numbers != true && upperCase === true) {
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword = upperChars[Math.floor(Math.random() * upperChars.length)];
      password = password.toString() + generatedPassword.toString();
    }
  }
  
  else if (numbers === true && upperCase != true) {
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword = lowerCharsNum[Math.floor(Math.random() * lowerCharsNum.length)];
      password = password.toString() + generatedPassword.toString();   
    }
  } else if (numbers != true && upperCase != true) {
    for (var i = 0; i < passwordLength; i++) {

      generatedPassword = lowerChars[Math.floor(Math.random() * lowerChars.length)];
      password = password.toString() + generatedPassword.toString();
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



