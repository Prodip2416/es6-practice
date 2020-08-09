let sum = 0;
const startDate = new Date();
for (let i = 0; i < 10000000000; i++) {
    sum++;
}
const endDate = new Date();

console.log('Time Elapsed : ', endDate - startDate, sum);