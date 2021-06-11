// Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){

    if ( bool === true ) {
        return 'Yes';
    }

    return 'No'

};

// Tests
console.log(boolToWord(true));  // --> 'Yes'
console.log(boolToWord(false));  // --> 'No'
