console.log([2, 5, 8, 1, 4].some(x => x < 10));  // true
console.log([2, 5, 8, 1, 4].some(x => x > 10));  // false
console.log([1, 5, 7, 9, 11].some(x => x % 2 == 0));  // false
console.log([1, 5, 7, 9, 11].some(x => x % 2 == 0));  // false
console.log([2, 4, 5, 8, 10].some(x => x % 2 == 1));  // true
console.log([1, 5, 6, 9, 11].some(x => x % 2 == 0));  // true
