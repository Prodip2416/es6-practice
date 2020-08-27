const numbers = [3, 5, 8, 9, 12];

// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(total);
// 37

// const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 3);

// console.log(result);
// 40

// const result = numbers.reduce((accumulator, currentValue) => accumulator - currentValue, 40);

// console.log(result);
// 3

// const result = numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0);

// console.log(result);
// 0 3
// 3 5
// 8 8
// 16 9
// 25 12
//  Result: 37


// const result = numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator - currentValue;
// }, 40);

// console.log(`Result : ${result}`);

// 40 3
// 37 5
// 32 8
// 24 9
// 15 12
// Result: 3