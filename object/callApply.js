const person = {
    firstName: 'Todd',
    lastName : 'Baloon',
    salary : 20000,
    getFullName: function(){
        return this.firstName +' '+ this.lastName;
    },
    chargeBill:function(bill){
        this.salary = this.salary - bill;
        return this.salary;
    }
}

console.log(person.getFullName());
console.log(person.salary);
person.chargeBill(200);
console.log(person.salary);
person.chargeBill(2000);
console.log(person.salary);


