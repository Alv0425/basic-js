const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedExpr = '';
  let initialStr = str.split('');
  let charStack = [];
  initialStr.forEach((char, i) => {
    if (charStack.includes(char) || charStack.length === 0){
      charStack.push(char);
      if (i === initialStr.length - 1) {
        let num = charStack.length === 1 ? '' : charStack.length;
        encodedExpr += num + charStack[0];
      }
    } else {
      let num = charStack.length === 1 ? '' : charStack.length;
      encodedExpr += num + charStack[0];
      charStack = [];
      charStack.push(char);
      if (i === initialStr.length - 1) {
        let num = charStack.length === 1 ? '' : charStack.length;
        encodedExpr += num + charStack[0];
      }
    }
  });
  return encodedExpr;
}

module.exports = {
  encodeLine
};
