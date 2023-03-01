const AnagramFinder = function (word) {
    this.word = word;
}

const sortWord = function (word) {
    return word.toLowerCase().split("").sort().join("");
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const sortedWord = sortWord(this.word);

    let wordsThatMatch = otherWords.filter((otherWord) => {
        let wordsAreNotTheSame = otherWord !== this.word;
        let sortedWordsAreTheSame = sortWord(otherWord) === sortedWord;
        return wordsAreNotTheSame && sortedWordsAreTheSame;
    });

    return wordsThatMatch;
}

module.exports = AnagramFinder;
