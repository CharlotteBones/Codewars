// Grasshopper - Personalised Message
function greet (name, owner) {
    
    if ( name == owner ) {
        return 'Hello boss';
    }

    return 'Hello guest';

};

// Tests
console.log(greet('Daniel', 'Daniel'));  // --> 'Hello boss'
console.log(greet('Greg', 'Daniel'));  // --> 'Hello guest'
