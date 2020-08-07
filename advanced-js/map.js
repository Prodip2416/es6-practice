let numbers = [2, 3, 4, 5, 6, 7, 8];

// back-dated style for array looping
// let output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i] * numbers[i]; 
//     output.push(element); 
// }
// console.log(output);


// Updated style for array looping
// const result = numbers.map(function(element){
//     return element * element;
// });
// console.log(result);


// Smart Style for array looping
const result = numbers.map(x => x * x);
console.log(result);