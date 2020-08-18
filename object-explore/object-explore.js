const person = {
    firstName: 'Tom',
    lastName: 'Bear',
    salary: 15000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    chargeBill: function (amount) {
        return this.salary = this.salary - amount;
    }
};

person.chargeBill(150);
person.getFullName();
console.log(person.salary);

// Tom Bear
// 14850

