const person = {
    firstName: 'Todd',
    lastName: 'Baloon',
    salary: 20000,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill: function (bill) {
        this.salary = this.salary - bill;
        return this.salary;
    }
}

const personOne = {
    firstName: 'Piter',
    lastName: 'Baloon',
    salary: 25000
}

const personTwo = {
    firstName: 'Marry',
    lastName: 'Baloon',
    salary: 30000
}

const personOneBill = person.chargeBill.bind(personOne);
const personTwoBill = person.chargeBill.bind(personTwo);

personOneBill(2000);
console.log(personOne.salary);

personTwoBill(3000);
console.log(personTwo.salary);

// person.chargeBill(2000);
console.log(person.salary);