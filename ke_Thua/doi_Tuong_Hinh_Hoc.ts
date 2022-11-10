class Shape {
    private color: string = "green";
    private filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    }
}

let shape: Shape = new Shape("red", false);
console.log(shape);
console.log(shape.toString());

class Circle extends Shape {
    private radius: number = 1.0;


    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled);
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }

    // override method
    public toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }
}

let circle: Circle = new Circle(3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());

class Rectangle extends Shape {
    private width: number = 1.0;
    private length: number = 1.0;

    constructor(width: number, length: number, color: string, filled: boolean) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getArea(): number {
        return this.width * this.length;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    //Override method
    public toString(): string {
        return " A Rectangle with = "
            + this.getWidth()
            + " and length = "
            + this.getLength()
            + ", which is a subclass of "
            + super.toString();
    }
}

let rectangle: Rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

class Square extends Rectangle {

    constructor(side: number, color: string, filled: boolean) {
        super(side, side, color, filled);
    }

    public getSide(): number {
        return this.getWidth();
    }

    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
    public setWidth(width: number): void {
        this.setSide(width);
    }

    //Override method
    public setLength(length: number): void {
        this.setSide(length);
    }

    //Override method
    public toString(): string {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());