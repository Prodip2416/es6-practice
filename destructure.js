const bigObject = { name: "Tom", email: "tom@gmail.com", address: "USA", phone: 12345, salary: '$780' };

const { salary, phone } = bigObject;

console.log(salary, phone);

console.log('---------------------------');

const myArray = [12, 13, 14, 15, 16, 20];
const [first, second, ...others] = myArray;

console.log(first, second);
console.log(first, second, others);

console.log('---------------------------');

const complexObject = { name: 'Bob', email: 'bob@gmail.com', info :{ salary1: '$1000', phone1: '12345' }, address: "England" };

const {salary1,phone1} = complexObject.info;
console.log(salary1,phone1);