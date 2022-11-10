var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "green";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    };
    return Shape;
}());
var shape = new Shape("red", false);
console.log(shape);
console.log(shape.toString());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = 1.0;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    // override method
    Circle.prototype.toString = function () {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Circle;
}(Shape));
var circle = new Circle(3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = 1.0;
        _this.length = 1.0;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    //Override method
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width="
            + this.getWidth()
            + " and length="
            + this.getLength()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        return _super.call(this, side, side, color, filled) || this;
    }
    Square.prototype.getSide = function () {
        return this.getWidth();
    };
    Square.prototype.setSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    //Override method
    Square.prototype.setWidth = function (width) {
        this.setSide(width);
    };
    //Override method
    Square.prototype.setLength = function (length) {
        this.setSide(length);
    };
    //Override method
    Square.prototype.toString = function () {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Square;
}(Rectangle));
var square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());
