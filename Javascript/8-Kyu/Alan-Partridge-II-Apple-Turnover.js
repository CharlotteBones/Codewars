// Alan Partridge II - Apple Turnover
function apple(x){

    if ( x ** 2 > 1000 ) {
        return 'It\'s hotter than the sun!!';
    }

    return 'Help yourself to a honeycomb Yorkie for the glovebox.';

};

// Tests
console.log(apple(50));  // --> 'It's hotter than the sun!!'
console.log(apple(4));  // --> 'Help yourself to a honeycomb Yorkie for the glovebox.'
