const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
  function sortByHeight(arr) {
    const filteredArr = arr.filter((element) => {
      if (element !== -1) {
        return true;
      }
    })
    filteredArr.sort((a, b) => {
      return a - b;
    })
    let index = 0;
    return arr.map((element) => {
      if (element !== -1) {;
        return filteredArr[index++];;
      }
      return -1;
    })
  }

module.exports = {
  sortByHeight
};
