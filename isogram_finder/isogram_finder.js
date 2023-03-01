const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    lowerCaseArray = this.word.toLowerCase().split("");
    return lowerCaseArray.every
        (letter => lowerCaseArray.indexOf(letter) === lowerCaseArray.lastIndexOf(letter));
}

module.exports = IsogramFinder;
