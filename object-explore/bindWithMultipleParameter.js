const person = {
    name: 'Tom',
    salary: 15000,
    houseRent: function (amount, vat, tax) {
        return this.salary = this.salary - amount - vat - tax;
    }
};

const firstPerson = {
    name: 'Piter',
    salary: 20000
};

const firstPersonHouseRent = person.houseRent.bind(firstPerson);
firstPersonHouseRent(3000, 100, 20);

console.log(`${person.name} Balance : ${person.salary}`);
// Tom Balance : 15000

console.log(`${firstPerson.name} Balance : ${firstPerson.salary}`);
// Piter Balance : 16880