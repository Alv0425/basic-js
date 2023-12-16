const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let initStr = '' + str;
  let {
    repeatTimes, 
    separator, 
    addition, 
    additionRepeatTimes,
    additionSeparator
  } = options;
  if (repeatTimes === undefined) {repeatTimes = 1;}
  if (separator === undefined) {separator = '+'}
  if (addition === null) {addition = 'null'}
  if (addition === undefined) {addition = ''}
  if (additionRepeatTimes === undefined) {additionRepeatTimes = 1;}
  if (additionSeparator === undefined) {additionSeparator = '|';}
  let add = (new Array(additionRepeatTimes)).fill(addition).join(additionSeparator);
  let wordExtended = initStr + add;
  return (new Array(repeatTimes)).fill(wordExtended).join(separator);
}

module.exports = {
  repeater
};
