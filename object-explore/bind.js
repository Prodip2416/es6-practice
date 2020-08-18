const person = {
    name: 'Tom',
    salary: 15000,
    houseRent: function (amount) {
        return this.salary = this.salary - amount;
    }
};

person.houseRent(3000);

const firstPerson = {
    name: 'Piter',
    salary: 20000
};

const firstPersonHouseRent = person.houseRent.bind(firstPerson);
firstPersonHouseRent(5000);

console.log(`${person.name} Balance : ${person.salary}`);
// Tom Balance : 12000

console.log(`${firstPerson.name} Balance : ${firstPerson.salary}`);
// Piter Balance : 15000