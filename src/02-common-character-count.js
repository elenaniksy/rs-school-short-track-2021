/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1obj = {};
  const s2obj = {};
  let result = 0;
  // eslint-disable-next-line no-prototype-builtins,no-param-reassign,no-return-assign
  const countElm = (arr, obj) => arr.map((x) => (obj.hasOwnProperty(x) ? obj[x]++ : obj[x] = 1));
  countElm(s1.split(''), s1obj);
  countElm(s2.split(''), s2obj);
  const s1Keys = Object.keys(s1obj);
  const s2Keys = Object.keys(s2obj);
  for (let i = 0; i < s1Keys.length; i++) {
    if (s2Keys.indexOf(s1Keys[i]) !== -1) {
      if (s1obj[s1Keys[i]] < s2obj[s1Keys[i]]) {
        result += s1obj[s1Keys[i]];
      } else {
        result += s2obj[s1Keys[i]];
      }
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
