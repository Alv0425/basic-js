const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  isFlat(arr) {
    return arr.filter(el => Array.isArray(el)).length === 0;
  }
  calculateDepth(arr) {
    let depth = 1; 
    let array = arr;
    if (this.isFlat(array)) {
      return depth;
    }
    let flatarr = array.flat(1);
    if (!this.isFlat(flatarr)) {
      depth += this.calculateDepth(flatarr);
    } else {
      depth += 1;
      return depth;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
