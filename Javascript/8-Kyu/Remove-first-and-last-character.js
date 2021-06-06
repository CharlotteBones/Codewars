// Remove first and last character
function removeChar(str){
    
    return str.slice(1, -1);
   
};

// Tests
console.log(removeChar('eloquent'));  // --> 'loquen'
console.log(removeChar('qualified'));  // --> 'qualified'
console.log(removeChar('javascript')); // --> 'avascrip'
