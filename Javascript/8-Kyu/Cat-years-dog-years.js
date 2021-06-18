// Cat years, dog years
var humanYearsCatYearsDogYears = function(humanYears) {

    switch (humanYears) {
        case 1:
            return [humanYears, 15, 15];
        case 2:
            return [humanYears, 24, 24];
        default:
            return [humanYears, (humanYears * 4 + 16), (humanYears * 5 + 14)];
    };

}; 

// Tests
console.log(humanYearsCatYearsDogYears(1));  // --> [1,15,15]
console.log(humanYearsCatYearsDogYears(2));  // --> [2,24,24]
console.log(humanYearsCatYearsDogYears(10));  // --> [10,56,64]
