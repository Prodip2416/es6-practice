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


person.chargeBill.apply(personOne, [900, 100, 10]);
person.chargeBill.apply(personTwo, [900, 100, 10]);

console.log(person.salary);
console.log(personOne.salary);
console.log(personTwo.salary);
