const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = [];
  let i = 0;
  let instructions = ["--discard-next", "--discard-prev","--double-next","--double-prev"]
  while (i < arr.length) {
    if (arr[i] === instructions[0]) {
      if (i !== arr.length - 1) {
        i = i + 1;
      if (i + 1 < arr.length) {
        if (arr[i + 1] === instructions[3] || instructions[1]){
          i = i + 1;
        }
      }
    }
    } else if (arr[i] === instructions[1]) {
      if (i > 0) {
        newArr.pop();
      }
    } else if (arr[i] === instructions[2]) {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === instructions[3]) {
      if (i > 0) {
      let last = newArr[newArr.length - 1];
      newArr.push(last);}
    } else {
      newArr.push(arr[i]);
    }
    i+=1;
  }
  return newArr;
}

module.exports = {
  transform
};
