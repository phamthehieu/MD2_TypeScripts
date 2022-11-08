var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
function showCircle(circle) {
    console.log(" Hinh tron nay co mau: " + circle.color + " va ban kinh la " + circle.radius);
}
circleList.forEach(showCircle);
