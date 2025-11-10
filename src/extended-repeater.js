const { NotImplementedError } = require("../lib");

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
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.addition === null) {
    options.addition = null;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  let rezultStr = '';
  let subStr = '';
  for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
    subStr += options.addition + options.additionSeparator;
  }
  subStr += options.addition;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    rezultStr += str + subStr + options.separator;
  }
  rezultStr += str + subStr;
  return rezultStr;
}

module.exports = {
  repeater,
};
