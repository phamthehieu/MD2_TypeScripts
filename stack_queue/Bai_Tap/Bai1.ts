class Queue<T> {
    container: T[] = [];

    constructor() {
    }

    enqueue(item: T): void {
        this.container.push(item)
    }

    dequeue(): T | undefined {
        return this.container.shift()
    }
}

class Stack<T> {
    container1: T[] = [];

    constructor() {
    }

    push(data: T): void {
        this.container1.push(data)
    }

    pop(): T | undefined {
        return this.container1.pop()
    }
}

let readlineSync = require('readline-sync');
let str = readlineSync.question('Enter string that need to check :  ');
let queue = new Queue<string>()
let stack = new Stack<string>()
for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
    queue.enqueue(str[i])
}
let flag = 0;
for (let i = 0; i < str.length; i++) {
    if (stack.pop() != queue.dequeue()) {
        flag = 1;
    }
}
if (flag === 0) {
    console.log('chuoi doi xung')
} else console.log('chuoi khong doi xung')