// What's the real floor?
function getRealFloor(n) {

    if ( n <= 0 ) {
        return n;
    } else if ( 13 < n ) {
        return n - 2;
    } else {
        return n - 1;
    }

};

// Tests
console.log(getRealFloor(1));  // --> 0
console.log(getRealFloor(5));  // --> 4
console.log(getRealFloor(15));  // --> 13
