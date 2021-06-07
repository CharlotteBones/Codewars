// Powers of 2
function powersOfTwo(n){

    let powerList = [];
    
    for (i = 0; i <= n; i++) {
        powerList.push(2 ** i);
    };

    return powerList;

};

// Tests 
console.log(powersOfTwo(0));  // --> [1]
console.log(powersOfTwo(1));  // --> [1, 2]
console.log(powersOfTwo(2));  // --> [1, 2, 4]
