const person = {
    firstName: 'Rahim',
    lastName: 'Uddein',
    salary: 15000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
};

person.chargeBill(150);
person.getFullName();
console.log(person.salary);
