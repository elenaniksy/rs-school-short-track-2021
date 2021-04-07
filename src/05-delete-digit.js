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
  const nToStr = n.toString();
  const numberCombinations = [];
  for (let i = 0; i < nToStr.length; i++) {
    const num = nToStr.slice(0, i) + nToStr.slice(i + 1);
    numberCombinations.push(parseInt(num, 10));
  }
  return Math.max.apply(null, numberCombinations);
}

module.exports = deleteDigit;
