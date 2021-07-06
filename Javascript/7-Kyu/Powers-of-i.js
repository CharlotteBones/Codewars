// Powers of i
function pofi(n){
    
    return ['1', 'i', '-1', '-i'][n % 4]

};

// Tests
console.log(pofi(0));  // --> '1'
console.log(pofi(1));  // --> 'i'
console.log(pofi(2));  // --> '-1'
console.log(pofi(3));  // --> '-i'
console.log(pofi(4));  // --> '1'
console.log(pofi(5));  // --> 'i'
console.log(pofi(6));  // --> '-1'
console.log(pofi(7));  // --> '-i'
console.log(pofi(8));  // --> '1'
console.log(pofi(9));  // --> 'i'
console.log(pofi(10));  // --> '-1'
