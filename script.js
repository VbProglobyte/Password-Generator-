// Assignment Code
    
// this is a random password generator

// CHARACTER VARIABLES ------------------------------------character pool--------------------//
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var symbol = "!@#$%^&*()_+=-/.,<>:{}|";
    // CHARACTER STORAGE //
    var passwordCharTypes = ""; //character conditions 
    
// GENERATOR FUNCTION ----------------------------------------& return point-----------------------//
function generatePassword() {
    
    var passwordConfirmed = "";
    

    // 8 - 128 PROMPT AND CONDITION---------------------------password-length confirmations------------------------//
    var length = prompt("Please enter a number between 8 - 128 characters for password");
    
    if (length < 8 || length > 128) {
        alert("You must choose a number between 8-128 characters");
        return;
    }
   
    // CONFIRMS -------------------------------------------------------character confirmations-------------------//
    var isLower = confirm("Would you like lowercase letters?");
    var isUpper = confirm("Would you like uppercase letters?");
    var isNumber = confirm("Would you like numbers?");
    var isSymbol = confirm("Would you like symbols?");
    // --------------------------------------------------------------all character requirements met?    
    if (!isLower && !isUpper && !isNumber && !isSymbol){
        alert("You must select at least one character type!");
        return;
    }
    // LOOP -----------------------------------------------------------infinite-------------//
    for (i =0; i < length; i++) {
    passwordConfirmed += passwordCharTypes.charAt[Math.floor(Math.random() * passwordCharTypes.length)];
    }
    
    // CHARACTER CONDITIONS -----------------------------lower, upper, number, symbol---------------//
    // four confirmation prompts for each type of character
   
    if (isLower) {
        passwordCharTypes += lower;
    }
    if (isUpper) {
        passwordCharTypes += upper;
    }
    if (isNumber) {
        passwordCharTypes += number;
    }
    if (isSymbol) {
        passwordCharTypes += symbol;
    }
}


// WHEN PASSWORD IS GENERATED - THEN THE PASSWORD IS DISPLAYED OR AN ALERT IS SIGNALED  

// ------------------------------------------------------placeholder text-------------------------------//
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// GENERATE BUTTON ---------------------------------------------generate password element--------------------------//
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// THE END-----------------------------thanks for checkin' it out--------------------------------//
