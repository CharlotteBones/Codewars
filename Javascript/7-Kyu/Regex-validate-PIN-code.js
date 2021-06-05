// Regex validate PIN code
function validatePIN (pin) {

    let regex = /^\d{4}$|^\d{6}$/;
    return regex.test(pin);

};

// Tests
console.log(validatePIN("1234"))   // -->  true
console.log(validatePIN("12345"))  // -->  false
console.log(validatePIN("a234"))   // -->  false
