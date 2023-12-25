const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  if (!(date instanceof Date)){
    throw new Error('Invalid date!');
  } else if (Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  } else {
    if (!isNaN(date)){
      let month = date.getMonth();
      if (month === undefined || month < 0){
        throw new Error('Invalid date!');
      } else if (month === 11 || month <= 1) {
        return 'winter';
      } else if (month >= 2 && month <= 4){
        return 'spring';
      } else if (month >= 5 && month <= 7) {
        return 'summer';
      } else if (month >= 8 && month <= 10) {
        return 'autumn';
      } else {
        throw new Error('Invalid date!');
      }
    } else {
      throw new Error('Invalid date!');
    }
  }
}

module.exports = {
  getSeason
};
