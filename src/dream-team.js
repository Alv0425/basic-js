const { NotImplementedError } = require('../extensions/index.js');

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
  let dreamTeamArr = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((el) => {
    if (typeof el === 'string') {
      if (/[a-zA-Z]/.test(el.trimStart()[0])) {
        dreamTeamArr.push(el.trimStart()[0].toUpperCase());
      }
    }
  });
  return dreamTeamArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
