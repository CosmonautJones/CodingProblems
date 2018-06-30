// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let result = '';
  let matchObj = {};
  let strArray = str.split('');
  strArray.forEach(el => {
    if (matchObj.hasOwnProperty(el)) {
      matchObj[el] ++;
    } else {
      matchObj[el] = 1
    }
  });
  console.log((matchObj));
  for (let char in matchObj) {
    if (matchObj[char] > max) {
      max = matchObj[char];
      result = char;
    }
  }
  return result;
}
maxChar("abcccccccd");

module.exports = maxChar;
