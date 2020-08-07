let students = [
    { id: 10, name: "Tom" },
    { id: 20, name: "Todd" },
    { id: 30, name: "Bob" },
    { id: 40, name: "Milan" }
]

// const names = students.map(s => s.name);
console.log(students.map(s => s.name));
console.log(students.map(s => s.id));
console.log(students.filter(s => s.id > 20));
console.log(students.find(s => s.id > 20));
