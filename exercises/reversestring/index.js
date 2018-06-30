// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

reverse('Greetings!');

module.exports = reverse;

// const reverse = (str) => {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// };


// const reverse = (str) => {
//   // create result array
//   let result = [];
//   // take in string and split() into an array
//   let splitString = str.split('');
//   // iterate over array pushing onto new array
//   for (let i = 0; i < splitString.length; i++) {
//     result.unshift(splitString[i]);
//   }
//   // join the array back to a single string
//   return result.join('');
// };

// const reverse = (str) => {
//   let splitString = str.split('');
//   return splitString.reverse().join('');
// };
