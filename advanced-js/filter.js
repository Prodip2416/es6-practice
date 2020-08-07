let numbers = [2,3,4,5,6,7,8];

const result = numbers.filter(x => x > 6);
const isOdd = numbers.filter(x => x % 2 == 1);
const isEven = numbers.filter(x => x % 2 == 0);

console.log(result);
console.log(isOdd);
console.log(isEven);

// Result
// [ 7, 8 ]
// [ 3, 5, 7 ]
// [ 2, 4, 6, 8 ]
