let s = 'javascriptloops';

// let vowelArray = [];
// let consonentArray = [];

// for(let i = 0; i < s.length; i++){
//     if (s.charAt(i).toUpperCase() == 'A' || s.charAt(i).toUpperCase() == 'E' || s.charAt(i).toUpperCase() == 'I' || s.charAt(i).toUpperCase() == 'O' || s.charAt(i).toUpperCase() == 'U'){
//         vowelArray.push(s.charAt(i));
//     }else{
//         consonentArray.push(s.charAt(i));
//     }
   
// }

// const newStr = [...vowelArray, ...consonentArray]

// for(i of newStr){
//     console.log(i)
// }

let vowels = ["a", "e", "i", "o", "u"];

for (let v of s) {
    if (vowels.includes(v))
        console.log(v);
}

for (let v of s) {
    if (!vowels.includes(v))
        console.log(v);
}