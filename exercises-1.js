/*
    Legend
    ------

    🔎 ( function name ) == Search the web for the built-in function for this task 
    🔛 ( 1 / 2 )         == Two completely different ways to solve the exercise (either is good)


*/

/*
    0️⃣ Create a function that takes a password and returns 
    it if the password is valid and false if it's invalid
    🔛( for loop / regex )


    The validation rules are:
 
    1. The password must start with a capital letter        🔎 String.toUpperCase     
    2. The password must end with a capital letter          🔎 String.toUpperCase
    3. The password must contain exactly two digits         🔎 Array.includes    
    4. The third character must be a lowercase letter       🔎 String.toLowerCase
    5. The password must be at least 8 characters long      🔎 String.length
*/
function validatePassword(password) {
    // only change code in the function
}

/*
    1️⃣ Replace any '.' characters in a string with '-'      🔎 String.replace
*/
function replaceDotWithHyphen(input) {
    // only change code in the function
}

/*
    2️⃣ When provided with a letter, return its position in the alphabet.
    
    Check only for capital letters
*/
function getLetterAlphabetPosition(letter) {
    // only change code in the function
}

/* ------------------------------------------------------------------

 You don't need to modify or understand this code below
 
 */
module.exports = {
    validatePassword: validatePassword,
    replaceDotWithHyphen: replaceDotWithHyphen,
    getLetterAlphabetPosition: getLetterAlphabetPosition,
};
