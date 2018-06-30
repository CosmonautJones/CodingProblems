// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let result = [];
  let splitNum = n.toString().split('');
  if (splitNum[0] === '-') {
    result.push(splitNum[0]);
    splitNum.splice(0, 1);
  }
  for (let i = splitNum.length - 1; i >= 0; i--) {
    result.push(splitNum[i]);
  }
  return Number(result.join(''));
}

console.log(reverseInt(-128376));
console.log(reverseInt(1000));
console.log(reverseInt(6546512));

module.exports = reverseInt;

// const reverseInt = (n) => {
//   const reversed = n.toString().split('').reverse().join('');
// return parseInt(reversed) * Math.sign(n);
// }