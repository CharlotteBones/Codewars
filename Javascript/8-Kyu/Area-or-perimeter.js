// Area or Perimeter
const areaOrPerimeter = function(l , w) {
  
    return l === w ? l ** 2 : (l + w) * 2;
    
};

// Tests
console.log(areaOrPerimeter(6, 10)); // --> 32
console.log(areaOrPerimeter(3, 3)); // --> 9
