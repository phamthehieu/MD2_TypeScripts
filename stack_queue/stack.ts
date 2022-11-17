interface IStack<T> {
    push(item: T): void;

    pop(): T | undefined;

    peek(): T | undefined;

    size(): number;
}

class Stack<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error('Stack has reached max capacity, you cannot add more items');
        }
        this.storage.push(item)
    }

    size(): number {
        return 0;
    }

}

const stack = new Stack<string>();
stack.push("a")
stack.push("b")

console.log(stack.size())
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())