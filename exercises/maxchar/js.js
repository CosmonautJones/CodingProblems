const charCount = (str) => {

  let strMap = {};
  let string = str.replace(/[^\w]/g, '');
  let strArray = string.toUpperCase().split('');

  strArray.forEach(el => {
    if (strMap.hasOwnProperty(el)) {
      strMap[el]++;
    } else {
      strMap[el] = 1
    }
  });

  Object.keys(strMap).forEach(element => {
    let temp = element;
    console.log(temp + ' ' + '-' + ' ' + strMap[element]);
  })
}

charCount('A A a a B b B C C c');
charCount('aaAbBbCcc');

const arrayAllocation = (arr, k) => {
  // edge case
  if (!arr.includes(k)) return k;

  let s1 = [];
  let s2 = [];
  let middle;

  arr.sort().forEach(element => {
    if (element < k) s1.push(element);
    if (element === k) middle = element;
    if (element > k) s2.push(element);
  });

  console.log(s1.join(' ') + '\n' + middle + '\n' + s2.join(' '))
}

arrayAllocation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
arrayAllocation([1, 5, 2, 3, 6, 7, 8, 0], 7)
arrayAllocation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12)