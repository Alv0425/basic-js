const { NotImplementedError } = require('../extensions/index.js');

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
  let numArr = n.toString().split('').map(digit => Number(digit));
  let digits = new Set(numArr);
  let maxNum = 0;
  digits.forEach((digit) => {
    let i = numArr.indexOf(digit);
    let num = numArr.slice(0,i).concat(numArr.slice(i + 1, numArr.length));
    num = Number(num.join(''));
    if (maxNum < num) {
      maxNum = num;
    }
  });
  return maxNum;
}

module.exports = {
  deleteDigit
};
