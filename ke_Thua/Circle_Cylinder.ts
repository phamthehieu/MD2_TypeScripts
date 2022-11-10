class Circle {
    protected _radius: number;
    private _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    public getRadius(): number {
        return this._radius;
    }

    public setRadius(value: number) {
        this._radius = value;
    }

    public getColor(): string {
        return this._color;
    }

    public setColor(value: string) {
        this._color = value;
    }

    public arena(): number {
        return this._radius*this._radius*Math.PI;
    }
}

let obj = new Circle(10,"red");
console.log(obj);
console.log(obj.arena());

class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    public getHeight(): number {
        return this._height;
    }

    public setHeight(value: number) {
        this._height = value;
    }

    public volume(): number {
        return this._radius*this._height*Math.PI;
    }
}

let obj1 = new Cylinder(10,"green",10)
console.log(obj1);
console.log(obj1.volume())