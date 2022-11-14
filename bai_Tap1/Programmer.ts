class Programmer {
    private _id: number
    private _salary: number

    constructor(id: number, salary: number) {
        this._id = id;
        this._salary = salary;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}

class JsProgrammer extends Programmer {

    constructor(id: number, salary: number) {
        super(id, salary);
    }
}

class JavaProgrammer extends Programmer {

    constructor(id: number, salary: number) {
        super(id, salary);
    }
}

class PhpProgrammer extends Programmer {

    constructor(id: number, salary: number) {
        super(id, salary);
    }
}

class ProgrammerManager {
    static listProgrammer: Programmer [] = [];

    constructor() {
    }

    static add(programmer: any): void {
        ProgrammerManager.listProgrammer.push(programmer)
    }

    static max() {
        let arrylist = []
        let max = ProgrammerManager.listProgrammer[0].salary
        for (let i = 0; i < ProgrammerManager.listProgrammer.length; i++) {
            if (ProgrammerManager.listProgrammer.length > max) {
                max = ProgrammerManager.listProgrammer[i].salary
            }
        }
        for (let i = 0; i < ProgrammerManager.listProgrammer.length; i++) {
            if (ProgrammerManager.listProgrammer[i].salary === max) {
                arrylist.push(ProgrammerManager.listProgrammer[i])
            }
        }
        return arrylist
    }

    static display(): void {
        console.table(ProgrammerManager.listProgrammer)
    }

}

let programmer = new Programmer(1, 1)
let programmer1 = new Programmer(2, 2)
let programmer2 = new Programmer(3, 3)
let programmer3 = new Programmer(4, 4)
let programmer4 = new Programmer(4, 4)

let list = []
ProgrammerManager.add(programmer)
ProgrammerManager.add(programmer1)
ProgrammerManager.add(programmer2)
ProgrammerManager.add(programmer3)
ProgrammerManager.add(programmer4)


ProgrammerManager.display()
console.log(ProgrammerManager.max())
list = ProgrammerManager.listProgrammer.slice().sort((a, b) => b.salary - a.salary)
console.log(list)