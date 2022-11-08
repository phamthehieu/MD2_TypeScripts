var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this._speed = Speed.SLOW;
        this._on = false;
        this._radius = 5;
        this._color = "blue";
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Fan.prototype.getSpeed = function () {
        return this._speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._speed = value;
    };
    Fan.prototype.getOn = function () {
        return this._on;
    };
    Fan.prototype.setOn = function (value) {
        this._on = value;
    };
    Fan.prototype.getRadius = function () {
        return this._radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._color;
    };
    Fan.prototype.setColor = function (value) {
        this._color = value;
    };
    Fan.prototype.toString = function () {
        return "Trang thai quat: ".concat(this.getOn(), ", toc do: ").concat(this.getSpeed(), ", ban kinh quat: ").concat(this.getRadius(), ", mau sac: ").concat(this.getColor());
    };
    return Fan;
}());
var fan = new Fan(Speed.SLOW, false, 5, "blue");
console.log(fan.toString());
var fan1 = new Fan(Speed.FAST, true, 15, "yellow");
console.log(fan1.toString());
var fan2 = new Fan(Speed.MEDIUM, true, 10, "red");
console.log(fan2.toString());
