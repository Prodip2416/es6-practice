// Before introduce ES6...

// function DoubleIt(num){
//     return num * 2;
// }

// const DoubleIt = function myFunc(num){
//     return num * 2;
// }

// After IntroDuce ES6...

const DoubleIt = num => num * 2; // one parameter arrow function
const Add = (num1, num2 = 0) => num1 + num2; // multiple parameter arrow function
const justConsole = () => "Hello, from ES6."; // no parameter arrow function
const isEvan = (num) =>{ //  arrow function with multiple parameter and multiple statement or anything
    if(num %2 == 0){
        return true;
    }else{
        return false;
    }
};

let result = DoubleIt(6);
console.log(result);
let result1 = Add(6, 5);
console.log(result1);
console.log(justConsole());
let result3 = isEvan(5);
console.log(result3);