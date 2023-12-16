const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrixHeight = matrix.length;
  let matrixWidth = matrix[0].length;
  let accum = 0;
  for (let i = 0; i < matrixHeight; i += 1){
    for (let j = 0; j < matrixWidth; j += 1){
      if (i - 1 >= 0 ) {
        if (matrix[i-1][j] !== 0){
          accum += matrix[i][j];
        }
      } else {
        accum += matrix[i][j];
      }
    }
  }
  return accum;
}

module.exports = {
  getMatrixElementsSum
};
