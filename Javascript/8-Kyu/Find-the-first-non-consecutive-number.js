// Find the first non-consecutive number
function firstNonConsecutive (arr) {
    
    for ( num = 0; num < arr.length; num++ ) {

        let diff = arr[num + 1] - arr[num];

        if ( diff != 1 && isNaN(diff) === false) {
            return arr[num + 1];
        } 
    };

    return null;

};

// Tests
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));  // --> 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 7, 9]));  // --> 7
console.log(firstNonConsecutive([20, 21, 25, 26, 27]));  // --> 25
console.log(firstNonConsecutive([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]));  // --> null
