const { NotImplementedError } = require('../extensions/index.js');

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
  let numbers = n.split('-');
  let result = false;
  let alphabet = '0123456789ABCDEF';
  if (numbers.length === 6){
    let test = numbers.map(num => {
      if (num.length === 2 && alphabet.includes(num[0]) && alphabet.includes(num[1])) {
        return true;
      } else {return false;}
    });
    result = test.every((value) => value);
  }
  return result;
}
module.exports = {
  isMAC48Address
};
