const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let matrixHeight = matrix.length;
  let matrixWidth = matrix[0].length;
  const countNeighbors = (i, j) => {
    let counter = 0;
    if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1]) {
      counter += 1;
    }  
    if (j - 1 >= 0 && matrix[i][j - 1]) {
      counter += 1;
    }
    if (i - 1 >= 0 && matrix[i - 1][j]) {
      counter += 1;
    }
    if (i - 1 >= 0 && j + 1 < matrixWidth && matrix[i - 1][j + 1]){
      counter += 1;
    }
    if (j - 1 >= 0 && i + 1 < matrixHeight && matrix[i + 1][j - 1]){
      counter += 1;
    }
    if (j + 1 < matrixWidth && i + 1 < matrixHeight && matrix[i + 1][j + 1]){
      counter += 1;
    }
    if (j + 1 < matrixWidth && matrix[i][j + 1]){
      counter += 1;
    }
    if (i + 1 < matrixHeight && matrix[i + 1][j]){
      counter += 1;
    }
    console.log(counter)
    return counter;
  }
  let newm = [];
  for (let i = 0; i < matrixHeight; i += 1){
    newm.push([]);
    for (let j = 0; j < matrixWidth; j += 1){
      newm[i].push(countNeighbors(i, j));
    }
  }
  return newm;
}

module.exports = {
  minesweeper
};
