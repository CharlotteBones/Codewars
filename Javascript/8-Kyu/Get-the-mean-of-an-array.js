// Get the mean of an array
function getAverage(marks){
  
    return Math.floor(marks.reduce( (markSum, mark) => 
        markSum + mark) / marks.length);
    
};

// Tests
console.log(getAverage([2,2,2,2]));  // --> 2
console.log(getAverage([1,2,3,4,5,]));  // --> 3
console.log(getAverage([1,1,1,1,1,1,1,2]));  // --> 1
