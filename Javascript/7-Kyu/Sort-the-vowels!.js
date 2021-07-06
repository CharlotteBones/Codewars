// Sort the vowels!
function sortVowels(s){
    
    let vowels = 'aeiouAEIOU';
    let sorted = '';

    if ( typeof s === 'string' ) {
        for ( let i = 0; i < s.length; i++ ) {
            if ( vowels.includes(s[i]) ) {
                sorted = sorted.concat(`|${s[i]}\n`);
            } else {
                sorted = sorted.concat(`${s[i]}|\n`);
            }

        };
    };

    return sorted.trim('\n');

};

// Tests
console.log(sortVowels('Codewars'));  // --> 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('Rnd Te5T')); // --> 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337)); // --> ''
console.log(sortVowels(undefined)); // --> ''
