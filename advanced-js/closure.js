function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock2());

console.log(clock1());

console.log(clock2());

// Closure means function return another function and return function can access previous function variable

