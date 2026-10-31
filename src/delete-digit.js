const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const stringN = (n).toString();
  const arr = stringN.split('');
  for (let i = 0; i < arr.length; i++) {
    let newArr = [...arr];
    let newN = 0;
    newArr.splice(i, 1);
    newN = Number(newArr.join(''));
    if (newN > max) {
      max = newN;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
