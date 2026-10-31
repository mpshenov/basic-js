const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  for (let element of members) {
    if (typeof element === 'string') {
      const name = element.trim();
      if (name.length > 0) {
        arr.push(name[0].toUpperCase());
      }
    }
  }
  arr.sort();
  return arr.join('');
}

module.exports = {
  createDreamTeam
};
