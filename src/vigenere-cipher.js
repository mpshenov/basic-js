const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }

  charToIndex(ch) {
    let position = ch.charCodeAt(0) - 65;
    return position;
  }

  indexToChar(position) {
    let ch = String.fromCharCode(position + 65);
    return ch;
  }
  
  process(text, key, decrypt) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!')
    }

    let upperText = String(text).toUpperCase();
    let upperKey = String(key).toUpperCase();

    let result = '';
    let keyIndex = 0;
    
    for (let ch of upperText) {

      const number = this.charToIndex(ch);

      if (number <= 25 && number >= 0) {
        const shift = this.charToIndex(upperKey[keyIndex % upperKey.length]);
        let newNum;

        if (decrypt) {
            newNum = (number - shift + 26) % 26;
        } else {
            newNum = (number + shift) % 26};
        let newLetter = this.indexToChar(newNum)
        result += newLetter;
        keyIndex += 1;
      } else {
        result += ch;
      }
    }

    if (this.direction === true) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }


  }

  encrypt(text, key) {
    return this.process(text, key, false);
  }
  decrypt(text, key) {
    return this.process(text, key, true);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
