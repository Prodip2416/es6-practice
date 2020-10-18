class Stack {
    constructor() {
        this.stack = []
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

let myStack = new Stack();
myStack.add('Prodip');
myStack.add('Salekin');
myStack.add('Anik');
console.log(myStack.stack);
const removeItem = myStack.remove();
console.log(removeItem);
console.log(myStack.stack);

// Last In First Out
// LIFO
// Stack data structure
