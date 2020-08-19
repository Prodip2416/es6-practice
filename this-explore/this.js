// "use strict";
// function foo() {
//     console.log(this);
// }

// foo();

// undefined

// let x = this;
// console.log(x);

// [Window]


// const person = {
//     firstName: "John",
//     lastName: "Duo",
//     fullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// person.fullName();
//John Duo

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     myFunc: function () {
//         console.log(this);
//     }
// };

// person.myFunc();

// { firstName: 'John', lastName: 'Doe', myFunc: [Function: myFunc] }


var person1 = {
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}

person1.fullName.call(person2);  
// "John Doe"