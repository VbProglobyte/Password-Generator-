// Assignment Code
    
// this is a random password generator

// CHARACTER VARIABLES ------------------------------------character pool--------------------//
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var symbol = "!@#$%^&*()_+=-/.,<>:{}|";
    // STRING SPLITTER ------turning into array
    var lCharacters = lower.split("");
    var uCharacters = upper.split("");
    var nCharacters = number.split("");
    var sCharacters = symbol.split("");
    //  console.log(sCharacters); these work 
    var passwordConfirmed = "";
     // CHARACTER STORAGE POOL //
    var passwordCharTypes = ""; //character conditions  
     

// GENERATOR FUNCTION ----------------------------------------& return point-----------------------//
function generatePassword() { 
    // 8 - 128 PROMPT AND CONDITION----------------password-length confirmations------------------------//
    var length = prompt("Please enter a number between 8 - 128 characters for a pretty decent password");
    
    // length = passwordCharTypes.length; also a guideline for numbers only 
    if (length < 8 || length > 128) {
        alert("You must choose a number between 8-128 characters");
        return generatePassword();
    }
    // Hey...I said number...
    if (isNaN(length)) {
        alert("Hey...I said number, not letter.");
        return generatePassword();
    }
    
    // PROMPT CONFIRMS ---------------------------------------------character confirmations-----------//
    var isLower = confirm("Would you like lowercase letters?");
    var isUpper = confirm("Would you like uppercase letters?");
    var isNumber = confirm("Would you like numbers?");
    var isSymbol = confirm("Would you like symbols?");
    
    // --------------------------------------------------------------all character requirements met?    
    if (!isLower || !isUpper || !isNumber || !isSymbol) {
        alert("For an Olympic level password, I recommend selecting all character types.");
        return generatePassword();
    } //-----if user does not select one of these, they will be kicked back to the beginning
    
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

    
    // LOOP -----------------------------------------------------------infinite-------------//
    for (var i =0; i < length; i++) {
        passwordConfirmed = passwordCharTypes[Math.floor(Math.random() * passwordCharTypes.length)];
        console.log(passwordConfirmed);
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
