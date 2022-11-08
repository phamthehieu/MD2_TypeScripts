class Circle {

    color: string;

    radius: number;

    constructor(color: string, radius: number) {

        this.color = color;

        this.radius = radius;

    }

}

let circleList: Circle[] = [];

circleList.push(new Circle("yellow", 10));

circleList.push(new Circle("green", 15));

circleList.push(new Circle("blue", 20));

function showCircle(circle: Circle) {

    console.log(" Hinh tron nay co mau: " + circle.color + " va ban kinh la " + circle.radius);

}

circleList.forEach(showCircle);