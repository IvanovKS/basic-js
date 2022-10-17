const { NotImplementedError } = require("../extensions/index.js");

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
  let result = "";
  let str1 = String(str);
  let additionResult = "";

  let addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  let repeatTimes = options.hasOwnProperty("repeatTimes")
    ? options.repeatTimes
    : 1;
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options.additionRepeatTimes
    : 1;
  let separator = options.hasOwnProperty("separator") ? options.separator : "+";
  let additionSeparator = options.hasOwnProperty("additionSeparator")
    ? options.additionSeparator
    : "|";

  additionResult = str1.padEnd(
    additionRepeatTimes > 1
      ? str1.length +
          addition.length * additionRepeatTimes +
          additionSeparator.length * (additionRepeatTimes - 1)
      : str1.length + addition.length * additionRepeatTimes,
    additionRepeatTimes > 1 ? addition + additionSeparator : addition
  );

  result = result.padEnd(
    repeatTimes > 1
      ? additionResult.length * repeatTimes +
          separator.length * (repeatTimes - 1)
      : additionResult.length * repeatTimes,
    repeatTimes > 1 ? additionResult + separator : additionResult
  );
  return result;
}

module.exports = {
  repeater,
};
