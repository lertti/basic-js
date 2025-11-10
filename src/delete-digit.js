const { NotImplementedError } = require("../lib");

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
  const str = n.toString();
  let maxValue = 0;
  for (i = 0; i < str.length; i++) {
    const currentString = str.substring(0, i) + str.substring(i + 1);
    if (Number(currentString) > maxValue) {
      maxValue = Number(currentString);
    }
  }
  return maxValue;
}

module.exports = {
  deleteDigit,
};
