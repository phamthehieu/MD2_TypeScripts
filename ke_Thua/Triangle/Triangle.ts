import {Shape} from "./Shape";

 export class Triangle extends Shape {
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    public getSide1(): number {
        return this._side1;
    }

    public setSide1(side1: number) {
        this._side1 = side1;
    }

    public getSide2(): number {
        return this._side2;
    }

    public setSide2(side2: number) {
        this._side2 = side2;
    }

    public getSide3(): number {
        return this._side3;
    }

    public setSide3(side3: number) {
        this._side3 = side3;
    }

    public getColorName(): object {
        return this;
    }

    public setColorName(color: string, name: string): void {
        this._name = name;
        this._color = color;
    }

    public getPerimeter(): number {
        return this._side1 + this._side2 + this._side3
    }

    public getArea(): number {
        let a = 0.5 * this.getPerimeter();
        return Math.pow(a * (a - this._side1) * (a - this._side2) * (a - this._side3), 0.5)
    }

    public check(): boolean {
        if (this._side1 < this._side2 + this._side3 && this._side3 < this._side1 + this._side2 && this._side2 < this._side3 + this._side1) {
            return true;
        } else {
            return false;
        }
    }
}

