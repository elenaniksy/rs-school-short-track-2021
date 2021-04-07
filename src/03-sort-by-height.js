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
  const result = [];
  const shortArr = [];
  arr.forEach((element) => (element !== -1 ? shortArr.push(element) : null));
  const sortedShortArr = shortArr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      result.push(sortedShortArr[count]);
      count++;
    }
  }
  return result;
}

module.exports = sortByHeight;
