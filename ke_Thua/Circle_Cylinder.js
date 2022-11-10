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
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.getColor = function () {
        return this._color;
    };
    Circle.prototype.setColor = function (value) {
        this._color = value;
    };
    Circle.prototype.arena = function () {
        return this._radius * this._radius * Math.PI;
    };
    return Circle;
}());
var obj = new Circle(10, "red");
console.log(obj);
console.log(obj.arena());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this._height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this._height;
    };
    Cylinder.prototype.setHeight = function (value) {
        this._height = value;
    };
    Cylinder.prototype.volume = function () {
        return this._radius * this._height * Math.PI;
    };
    return Cylinder;
}(Circle));
var obj1 = new Cylinder(10, "green", 10);
console.log(obj1);
console.log(obj1.volume());
