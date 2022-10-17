const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let x = matrix[0].length;

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < x; j++) {
      if (i == 0) {
        sum = sum + matrix[i][j];
      } else {
        isBelowZero = false;
        k = 0;
        
        while (!isBelowZero && k < i) {
          if (matrix[k][j] == 0) {
            isBelowZero = true;
          }
          k++;
        }

        if (!isBelowZero) {
          sum = sum + matrix[i][j];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
