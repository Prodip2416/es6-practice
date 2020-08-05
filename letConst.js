const name = "Prodip";
// name = "Sarker"; // Change not possible
console.log(name);

const myArray = [12,13];
myArray.push(14,15); // Possible :)

// myArray = ["Prodip","Sarker"]; // full array change not possible
console.log(myArray);
console.log('-------------------------------------')
// Let Vs Var
let sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}

console.log('Sum = '+ sum);
console.log('I = '+ i);
console.log('-------------------------------------')
let sum2 = 0;
for (let j = 0; j < 10; j++) {
    sum2 = sum2 + j;
}

console.log('Sum2 = '+ sum);
// console.log('J = '+ j);  // Not Possible get value from outside 