class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T): void {
        this.container.push(data);
    }

    pop(): T | undefined {
        return this.container.pop()
    }

}

let readlineSync = require('readline-sync');
let str = readlineSync.question('Enter :  ');
let stack = new Stack<number>();
for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
}
let arr = [];
for (let i = 0; i < str.length; i++) {
    arr.push(stack.pop())
}

console.log(arr);