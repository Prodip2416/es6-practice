let numbers = [2, 3, 4, 5, 6, 7, 8];

const result = numbers.find(x => x == 7);
const isLess5 = numbers.find(x => x < 5);
const isBigger5 = numbers.find(x => x > 5);

console.log(result);
console.log(isLess5);
console.log(isBigger5);

// Result
// 7
// 2
// 6