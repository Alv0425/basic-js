const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainElements: [],

  getLength() {
    return this.chainElements.length;
  },
  addLink(value) {
    let arr = this.chainElements;
    arr.push(value + '');
    this.chainElements = arr;
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || isNaN(position)) {
      this.chainElements = [];
      throw new Error("You can't remove incorrect link!");
    } else if (position <= this.chainElements.length && position > 0) {
      this.chainElements.splice(position - 1, 1);
    } else {
      this.chainElements = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    let reversed = [];
    for (let i = this.chainElements.length - 1; i >= 0; i -= 1){
      reversed.push(this.chainElements[i]);
    }
    this.chainElements = reversed;
    return this;
  },
  finishChain() {
    let chain = this.chainElements.map(el => '( ' + el + ' )').join('~~');
    this.chainElements = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
