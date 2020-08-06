class Student{
    constructor(sId, sName, sDept){
        this.id = sId;
        this.name = sName;
        this.dept = sDept;
    }
}
const student1 = new Student(1, "Prodip", "CSE");
const student2 = new Student(2, "Tuhin", "IT");

console.log(student1);
console.log(student2);
console.log(student1.name);
console.log(student2.name);