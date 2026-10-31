const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let hexadecimalDigits = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F'];
  let arr = n.split('-');
  if (arr.length !== 6) {
    return false;
  }
    for (let element of arr) {
    if (element.length !== 2) {
      return false;
    }
    }
  for (let element of arr) {
    if(!hexadecimalDigits.includes(element[0]) || !hexadecimalDigits.includes(element[1])) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address
};
