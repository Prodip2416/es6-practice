/////// Before Introduce ES6
let message = "Hy!";
let message1 = "What's Up?";
let welcomeBuddy = message + " " + message1;

console.log(welcomeBuddy);

/////// After Introduce ES6
let message2 = "Hy!";
let message3 = "What's Up?";
let welcomeBuddy1 = `${message2} ${message3}`;

console.log(welcomeBuddy1);

console.log('---------------------------------------');
/// for Multiple Line.........

// Before Introduce ES6
let welcome = "Hi! There.\n"+
              "I'm fine.\n" +
              "What about you?";
console.log(welcome);
console.log('-------------------------');
// After Introduce ES6
let greet = `Hi! There.
I'm fine.
What about you?`;
console.log(greet);
