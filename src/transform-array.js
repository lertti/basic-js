const { NotImplementedError } = require("../lib");

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
  if (!(arr instanceof Array)) return;
  let length = arr.length;
  let resultArray = [...arr];
  for (let i = 0; i < length; i += 1) {
    let currentValue = resultArray[i];
    if (currentValue == "--double-next") {
      if (i == length - 1) {
        resultArray.splice(i, 1);
        length -= 1;
        continue;
      }
      resultArray[i] = resultArray[i + 1];
    }
    if (currentValue == "--double-prev") {
      if (i == 0) {
        resultArray.splice(i, 1);
        length -= 1;
        i--;
        continue;
      }
      resultArray[i] = resultArray[i - 1];
    }
    if (currentValue == "--discard-prev") {
      if (i == 0) {
        resultArray.splice(i, 1);
        length -= 1;
        i--;
        continue;
      }
      resultArray[i - 1] = resultArray[i] = null;
    }
    if (currentValue == "--discard-next") {
      if (i == length - 1) {
        resultArray.splice(i, 1);
        length -= 1;
        continue;
      }
      resultArray[i] = resultArray[i + 1] = null;
    }
  }
  for (let i = 0; i < length; i++) {
    if (resultArray[i] == null) {
      resultArray.splice(i, 1);
      length -= 1;
      i--;
    }
  }
  return resultArray;
}

module.exports = {
  transform,
};
