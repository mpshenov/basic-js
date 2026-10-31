const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1, 
    separator = '+',
    addition = '', 
    additionRepeatTimes = 1, 
    additionSeparator = '|'
  } = options;

  const strStr = String(str);
  const additionStr = String(addition);

  const additionBlock = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);
  const unit = strStr + additionBlock;
  const unitBlock = Array(repeatTimes).fill(unit).join(separator);
  return unitBlock;
}

module.exports = {
  repeater
};
