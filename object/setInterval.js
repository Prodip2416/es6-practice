console.log(1111);
setInterval(() => {
    console.log('This function call again and again after 2s')
}, 2000);
console.log(2222);
setInterval(() => {
    console.log('This function call again and again after 3s')
}, 4000);
console.log(3333);
setInterval(() => {
    console.log('This function call again and again after 5s')
}, 6000);
console.log(4444);


// Result
// 1111
// 2222
// 3333
// 4444
// This function call again and again after 2s
// This function call again and again after 3s
// This function call again and again after 2s
// This function call again and again after 5s
// This function call again and again after 2s
// This function call again and again after 3s
// This function call again and again after 2s
// This function call again and again after 2s
// This function call again and again after 5s
// This function call again and again after 3s
// This function call again and again after 2s
// This function call again and again after 2s
// This function call again and again after 3s
// This function call again and again after 2s