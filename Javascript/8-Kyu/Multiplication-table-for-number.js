// Multiplication table for number
function multiTable(number) {
    
    let table = '';

    for (mlt = 1; mlt <= 10; mlt ++) {
        table += `${mlt} * ${number} = ${mlt * number}\n`;
    };

    return table.trim('\n');

};

// Test
console.log(multiTable(5));
