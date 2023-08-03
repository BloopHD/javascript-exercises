const palindromes = function (word) {

    let cleanedUpWord = cleanUpWord(word);
    let reversedWord = reverseWord(cleanedUpWord);  

    return cleanedUpWord == reversedWord;
};

// Cleans up word by removing punctuation and spaces, and then converts to lowercase.
function cleanUpWord(word){

    let undesirables = /[\s\.,?!]/g;
    let noUndesirablesWord = word.replace(undesirables, '');
    let lowerCaseWord = noUndesirablesWord.toLowerCase();

    return lowerCaseWord;
}

// Reverses the word, should be used after clean up.
function reverseWord(word) {

    let reversedWord = word.split('').reverse().join('');

    return(reversedWord);
}

// Do not edit below this line
module.exports = palindromes;
