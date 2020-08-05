// After Introduce ES6...
const arr = [10, 12, 13, 14];
const arr1 = [15, 17, 18];
const arr2 = [20, 21, 22, 24, 25];
const totalArray = arr.concat(arr1).concat([100]).concat(arr2);

console.log(totalArray);
console.log('------------------------------');
// Before Introduce ES6...
const totalArray1 = [...arr, ...arr1, 100, ...arr2];

console.log(totalArray1);
console.log('------------------------------');

// Before Introduce ES6 -- Find Max Value
const business = 500;
const minister = 800;
const primeMinister = 1200;

const result = Math.max(business, minister, primeMinister);
console.log(result);

// after ES6 introduce

const findNum = [500,600,800];

const result1 = Math.max(...findNum);
console.log(result1);