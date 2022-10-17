const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countOfCats = 0;
  matrix.forEach((element) => {
    countOfCats =
      countOfCats + element.filter((element1) => element1 == "^^").length;
  });
  return countOfCats;
}

module.exports = {
  countCats,
};
