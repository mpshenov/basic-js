const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let element of domains) {
    const parts = element.split('.').reverse();
    let currentResult = '';
    for (let part of parts) {
      currentResult += `.${part}`
      if(result[currentResult]) {
        result[currentResult] += 1;
      } else {
        result[currentResult] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
