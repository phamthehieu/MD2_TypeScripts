export class Shape {
    _name: string;
    _color: string;

    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    public getName(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
    }

    public getColor(): string {
        return this._color;
    }

    public setColor(value: string) {
        this._color = value;
    }
}

let shape = new Shape("tamgiac", "red");
console.log(shape);
