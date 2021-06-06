// Duplicate encoder
function duplicateEncode(word){
    
    word = word.toLowerCase();
    let newStr = '';

    for ( i in word ) {
        if ( (word.split(word[i]).length -1) == 1 ) {
            newStr += '(';
        } else {
            newStr += ')';
        }
        
    };

    return newStr

};

duplicateEncode('din') // --> "((("
duplicateEncode('recede') // --> "()()()"
duplicateEncode('Success') // --> ")())())"
