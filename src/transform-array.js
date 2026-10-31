const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
  function transform(arr) {
    let newArr = [];

    let discardNext = '--discard-next';
    let doubleNext = '--double-next';
    let discardPrev = '--discard-prev';
    let doublePrev = '--double-prev';

    let skipNext = false;
    let repeatNext = false;

    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }

    for (let i = 0; i < arr.length; i++) {

      if (skipNext) {
        skipNext = false
        continue;
      }
      
      if (repeatNext) {
        repeatNext = false;
        const isCommand =
        arr[i] === discardNext || arr[i] === doubleNext ||
        arr[i] === discardPrev || arr[i] === doublePrev;

        if (!isCommand) {
          newArr.push(arr[i]);
          newArr.push(arr[i]);
          continue;
        }
      }

      if (arr[i] === discardNext) {
        skipNext = true;
      } else if (arr[i] === doubleNext) {
        repeatNext = true;
      } else if (arr[i] === discardPrev) {
        newArr.pop();
      } else if (arr[i] === doublePrev) {
        if (newArr.length > 0) {
        newArr.push(newArr[newArr.length - 1]);
      }
      } else {
        newArr.push(arr[i])
      }
    }

    return newArr;
  }


module.exports = {
  transform
};
