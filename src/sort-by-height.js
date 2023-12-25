const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {
//   let sortedArr = arr;
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i += 1) {
//       let j = i + 1;
//       if (j === arr.length - 1 && sortedArr[j] === -1) {
//         j = i;
//       } else {
//         while (sortedArr[j] === -1) {
//           j = j + 1;
//         }
//       }
//       if (sortedArr[i] > sortedArr[j]) {
//         let temp = sortedArr[i];
//         sortedArr[i] = sortedArr[j];
//         sortedArr[j] = temp;
//         isSorted = false;
//       }
//     }
//   } 
//   return sortedArr;
// }

function sortByHeight(arr){
  let subarrToSort = arr.filter(el => el !== -1).sort((a, b) => a - b);
  let i = 0;
  return arr.map((el) =>  el === -1 ? -1 : subarrToSort[i++]);
}

module.exports = {
  sortByHeight
};
