// Grasshopper - If/else syntax debug
function checkAlive (health) {
  
    return health > 0;
    
};

// Tests 
console.log(checkAlive(5));  // --> true
console.log(checkAlive(0));  // --> false
