function removeExclamationMarks(s) {

    return s.split('!').join('');

};

// Tests
console.log(removeExclamationMarks('Hello World!'));  // --> 'Hello World'
console.log(removeExclamationMarks('!!Hey!!!'));  // --> 'Hey'
console.log(removeExclamationMarks('H!e!l!l!o!'));  // --> 'Hello'
