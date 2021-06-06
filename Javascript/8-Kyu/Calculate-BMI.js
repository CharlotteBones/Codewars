// Calculate BMI
function bmi(weight, height) {
    
    let bmi = (weight / (height ** 2)).toFixed(1);
    let ranges = [18.5, 25, 30, 100];
    let classes = ['Underweight', 'Normal', 'Overweight', 'Obese'];
    let output = '';

    for (idx = (ranges.length - 1); bmi <= ranges[idx]; idx--) {
        output = classes[idx];

    };

    return output;

};

// Tests
console.log(bmi(60, 1.80)); // --> "Underweight"
console.log(bmi(80, 1.80)); // --> "Normal"
console.log(bmi(90, 1.80)); // --> "Overweight"
console.log(bmi(100, 1.80)); // --> "Obese"
