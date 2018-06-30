// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringAMap = strMapper(stringA);
  stringBMap = strMapper(stringB);
  if (Object.keys(stringAMap).length === Object.keys(stringBMap).length) {
    for (let element in stringAMap) {
      if (stringAMap[element] === stringBMap[element]) return true;
      else {
        return false;
      }
    }
  }
  return false;
};

function strMapper(str) {
  let charMap = {};
  let fixedStr = str.replace(/[^\w]/g, "").toLowerCase();
  for (let i = 0; i < fixedStr.length; i++) {
    charMap[fixedStr[i]] = charMap[fixedStr[i]] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let string1Map = {};
//   let string2Map = {};
//   let string1 = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
//   let string2 = stringB.replace(/[^\w]/g, "").toLowerCase().split('');
//   if (stringA.length === stringB.length) {
//     string1.forEach(el => {
//       if (string1Map.hasOwnProperty(el)) {
//         string1Map[el]++;
//       } else {
//         string1Map[el] = 1;
//       }
//     });
//     string2.forEach(el => {
//       if (string2Map.hasOwnProperty(el)) {
//         string2Map[el]++;
//       } else {
//         string2Map[el] = 1;
//       }
//     });
//     for (let element in string1Map) {
//       if (string1Map[element] === string2Map[element]) return true;
//       else return false;
//     }
//   } else return false;
// };