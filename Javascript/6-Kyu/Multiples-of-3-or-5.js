// Multiples of 3 or 5
function solution(number){

    let sum = 0;

    for ( let num = 0; num < number; num++ ) {
        if ( num % 3 === 0 || num % 5 === 0) {
            sum += num
        }
    };

    return sum
  
};

// Test
console.log(solution(10))  // --> 23
console.log(solution(15))  // --> 45
