// How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
    
    if ( name === 'Zach' ) {
        return 18;
    }

    return 0;

};

// Tests
console.log(howManyLightsabersDoYouOwn());  // --> 0
console.log(howManyLightsabersDoYouOwn('Adam'));  // --> 0
console.log(howManyLightsabersDoYouOwn('Zach'));  // --> 18
