// adim kal a class k ai vabe use krto

// function Person(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }

// const person1 = new Person('Kuddus', 'khan', 1000);
// console.log(person1);

// After ES6 introduce class ......

class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const person2 = new Person('Piter','bob',20000);
console.log(person2);