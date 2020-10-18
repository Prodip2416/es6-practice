class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue('Prodip');
myQueue.enqueue('Salekin');
myQueue.enqueue('Anik');
console.log(myQueue.queue);

const removeItem = myQueue.dequeue();
console.log(removeItem);
console.log(myQueue.queue);

// First In First Out
// FIFO
// Queue data structure