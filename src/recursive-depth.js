const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthOfArray = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          depthOfArray = Math.max(depthOfArray, this.calculateDepth(arr[i]));
        }
        depthOfArray++;
    }
    return depthOfArray;
  }
  }

module.exports = {
  depthCalculator: new DepthCalculator(),
};
