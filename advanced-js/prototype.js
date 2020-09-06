function Person(name, age){
    name = name;
    age= age;
}

Person.prototype = {
    eat(){
        console.log('Person is eating');
    },
    sleep(){
        console.log('Person is sleeping');
    },
    play(){
        console.log('Person is playing');
    }
}

const harry = new Person("Harry", 36);

harry.eat();
//Person is eating

//Prototype is a property of any javascript function which is a point to an object.

function Student() {
    this.name = 'Harry';
    this.gender = 'Potter';
}

var studObj1 = new Student();
studObj1.age = 15;
console.log(studObj1.age); 
// 15

var studObj2 = new Student();
console.log(studObj2.age); 
// undefined


function Student() {
    this.name = 'Harry';
    this.gender = 'Potter';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age); 
// 15

var studObj2 = new Student();
console.log(studObj2.age);
 // 15


function Student() {
    this.name = 'Tom';
    this.gender = 'Cruise';
}

var studObj = new Student();

console.log(Student.prototype); 
// [object Object]
console.log(studObj.prototype); 
// undefined
console.log(studObj.__proto__); 
// [object Object]

console.log(typeof Student.prototype); 
// object
console.log(typeof studObj.__proto__); 
// object


function Student() {
    this.name = 'Tom';
    this.gender = 'Male';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log('studObj1.age = ' + studObj1.age);
 // 15

var studObj2 = new Student();
console.log('studObj2.age = ' + studObj2.age);
 // 15

Student.prototype = { age: 20 };

var studObj3 = new Student();
console.log('studObj3.age = ' + studObj3.age);
 // 20

console.log('studObj1.age = ' + studObj1.age);
 // 15
console.log('studObj2.age = ' + studObj2.age);
 // 15


function Student() {
    this.name = 'Robert';
    this.gender = 'Pattinson';
}

Student.prototype.sayHi = function () {
    console.log("Hi");
};

var studObj = new Student();
studObj.sayHi();
// Hi