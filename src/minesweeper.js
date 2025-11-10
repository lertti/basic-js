const { NotImplementedError } = require('../lib');

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
  let resultArray = [];

  for (let k = 0; k < matrix.length; k++) {
    resultArray[k] = [];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      const startI = i > 0 ? i - 1 : i;
      const startJ = j > 0 ? j - 1 : j;
      const endI = i < matrix.length - 1 ? i + 1 : i;
      const endJ = j < matrix[i].length - 1 ? j + 1 : j;
      
      let minesCounter = 0;

      if (matrix[i][j] === true) {
        minesCounter = 1;
      } else {
        for (let x = startI; x <= endI; x++) {
          for (let y = startJ; y <= endJ; y++) {
            if (matrix[x][y] === true) minesCounter++;
          }
        }
      }

      resultArray[i][j] = minesCounter;
    }
  }
  return resultArray;
  // return JSON.stringify(res);
}

module.exports = {
  minesweeper
};
