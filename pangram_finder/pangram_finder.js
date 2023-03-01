const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every
    (letter => this.phrase.toLowerCase().includes(letter));
  }

module.exports = PangramFinder;
