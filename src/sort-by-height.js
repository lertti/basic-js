const { NotImplementedError } = require("../lib");

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
function sortByHeight(arr) {
  const checkMinusArray = arr.every((e) => e === -1);
  if (checkMinusArray) {
    return arr;
  }
  function isNotMinusOne(value) {
    return value !== -1;
  }
  let filteredArray = arr.filter(isNotMinusOne).sort((a, b) => a - b);

  let sortedIndex = 0;
  const result = arr.map((item) => {
    if (item === -1) {
      return -1;
    } else {
      return filteredArray[sortedIndex++];
    }
  });

  return result;
}

module.exports = {
  sortByHeight,
};
