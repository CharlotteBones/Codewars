// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  
    return current === 'green' ? 'yellow'
         : current === 'yellow' ? 'red'
         : 'green';
  
};

// Tests
console.log(updateLight('green'));  // --> 'yellow'
console.log(updateLight('yellow'));  // --> 'red'
console.log(updateLight('red'));  // --> 'green'
