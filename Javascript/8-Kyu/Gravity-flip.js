// Gravity flip
const flip = (d, a) => {
    
    switch (d) {
        case 'L':
            return a.sort( (a, b) => {return b - a});
        case 'R':
            return a.sort( (a, b) => {return a - b});
    }; 

};

// Tests
console.log(flip('R', [3, 2, 1, 2])); // -->  [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5])); // -->  [5, 5, 4, 3, 1]
console.log(flip('R', [13, 2, 4, 7, 93]));  // --> [2, 4, 7, 13, 93]
