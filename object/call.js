const person = {
    firstName: 'Todd',
    lastName : 'Baloon',
    salary : 20000,
    getFullName: function(){
        return this.firstName +' '+ this.lastName;
    },
    chargeBill:function(bill, tips, tax){
        this.salary = this.salary - bill - tips - tax;
        return this.salary;
    }
}

const personOne = {
    firstName: 'Piter',
    lastName : 'Baloon',
    salary : 25000
}

const personTwo = {
    firstName: 'Marry',
    lastName : 'Baloon',
    salary : 30000
}

person.chargeBill.call(personOne, 900, 100, 10);
console.log(personOne.salary);
person.chargeBill.call(personTwo, 1000, 100, 10);
console.log(personTwo.salary);
console.log(person.salary);

// Result
// 23990
// 28890
// 20000