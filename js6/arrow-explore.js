// const printFive = () => 5;
// const result = printFive();

// console.log(result);
// 5

// const doubleIt = number => number * 2;
// const result = doubleIt(12);

// console.log(result);
// 24

// const sum = (num1, num2) => num1 + num2;
// const result = sum(12,13);

// console.log(result);
// 25

const findBig = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const result = findBig(3, 7);

console.log(result);
// 7