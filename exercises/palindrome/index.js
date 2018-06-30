// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  };
  if (reverse === str) return true;
  return false;
}

module.exports = palindrome;

// const palindrome = (str) => {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }