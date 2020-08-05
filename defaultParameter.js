// Before Introduce ES6...
function Add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
var result = Add(12);
console.log(result);

// After Introduce ES6...

function Add2(num1 = 0, num2 = 0) {  // Default Parameter
    return num1 + num2;
}
let result2 = Add2(15,12);
console.log(result2);