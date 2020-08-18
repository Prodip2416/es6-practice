const person = {
    name: 'Tom',
    salary: 15000,
    chargeBill: function (amount) {
        return this.salary = this.salary - amount;
    }
};

const firstPerson = {
    name: 'Piter',
    salary: 20000
};

person.chargeBill.call(firstPerson, 2000);

console.log(`${person.name} Balance : ${person.salary}`);
//Tom Balance : 15000

console.log(`${firstPerson.name} Balance : ${firstPerson.salary}`);
// Piter Balance : 18000