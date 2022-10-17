const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeLine = "";
  let tmpArray = str.split("");

  tmpArray.forEach((element, index) => {
    if (index == 0 || tmpArray[index - 1] !== element) {
      let i = index + 1;
      let count = 1;

      while (i < tmpArray.length && tmpArray[i] == element) {
        count++;
        i++;
      }
      let sum = count == 1 ? element : count + element;
      encodeLine = encodeLine + sum;
    }
  });

  return encodeLine;
}

module.exports = {
  encodeLine,
};
