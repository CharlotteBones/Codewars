// Reversed words
function reverseWords(str){
    
    return str.split(' ').reverse().join(' ');

};

// Tests
console.log(reverseWords('hello world!'));  // --> 'world! hello'
console.log(reverseWords('yoda doesn\'t speak like this'));  // --> 'this like speak doesn't yoda'
