// class Vehicle {
//     public name: string;
//     public seat: number;
//
//
//     constructor(name: string, seat: number) {
//         this.name = name;
//         this.seat = seat;
//     }
//     getName() {
//         return this.name;
//     }
//     getSeat() {
//         return this.seat;
//     }
// }
//
// class Taxi extends Vehicle{
//     public licensePlate: string
//
//
//     constructor(name: string, seat: number, licensePlate: string) {
//         super(name, seat);
//         this.licensePlate = licensePlate;
//     }
//     getLicensePlate() {
//         return this.licensePlate
//     }
// }
//
// let taxi = new Taxi('vios 2019',4,'30-1945');
// console.log(taxi.getName());
// console.log(taxi.getLicensePlate())

// class Car {
//     Color: string;
//
//     constructor(Color: string) {
//         this.Color = Color;
//     }
// }
// class Audi extends Car {
//     Price: number;
//
//     constructor(Color: string, Price: number) {
//         super(Color);
//         this.Price = Price;
//     }
//     display(): void {
//         console.log('Color of Audi car:' + this.Color);
//         console.log('Price of Audi car : ' + this.Price);
//     }
// }
// let obj = new Audi('Black', 850000);
// obj.display()
// Ke thua don cap
// class Shape {
//     Area: number
//     constructor(area: number) {
//         this.Area = area;
//     }
// }
//
// class Circle extends Shape {
//     display(): void {
//         console.log('Area of the circle : ' + this.Area)
//     }
// }
// let obj = new Circle(320);
// obj.display()

// ke thua nhieu cap

// class Animal {
//     eat(): void {
//         console.log('Eating')
//     }
// }
//
// class Dog extends Animal {
//     bark(): void {
//         console.log('Banking')
//     }
// }
//
// class BabyDog extends Dog {
//     weep(): void {
//         console.log('Weeping')
//     }
// }
//
// let obj = new BabyDog();
// obj.eat();
// obj.bark()
// obj.weep();

// Nap chong phuong thuc trong ES6

// function add(a: number, b: number): number;
// function add(a:string, b:string): string;
// function add(a: any, b: any) {
//     return a+ b;
// }
// console.log(add("Hello","JavaTpoint"));
// console.log(add(10,20))
//
// class A {
//     foo(arg) {
//         if (typeof (arg) === 'number')
//             return arg.toString();
//         if (typeof (arg) === 'string')
//             return arg;
//     }
// }
// let obj = new A()
// console.log(obj.foo(101))
// console.log(obj.foo('ok'))

// Ghi đè phương thức trong Typescript

// class Person {
//     name: string;
//
//     eat(): void {
//         console.log(this.name + 'eats when hungry')
//     }
// }
//
// class Student extends Person {
//     rollNumber: number;
//
//
//     constructor(rollNumber: number, name1: string) {
//         super();
//         this.rollNumber = rollNumber;
//         this.name = name1
//     }
//     displayInformation(): void {
//         console.log(' Name: ' + this.name + ' , Roll Number : ' + this.rollNumber)
//     }
//     eat():void {
//         console.log(this.name + ' eats during break.  ')
//     }
// }
//
// let student1 = new Student(2,'Rohit')
//
// student1.displayInformation();
// student1.eat();

// Đa hình trong TypeScript

// class Box {
//     length: number;
//     width: number;
//     height: number;
//
//
//     constructor(length: number, width: number, height: number) {
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }
//
//     volume(): number {
//         return this.length*this.width*this.height;
//     }
// }
//
// class BoxWeight extends Box {
//     length: number;
//     width: number;
//     height: number;
//     depth: number;
//
//
//     constructor(length: number, width: number, height: number, depth: number) {
//         super(length, width, height);
//         this.length = length;
//         this.width = width;
//         this.height = height;
//         this.depth = depth;
//     }
//
//     volume(): number {
//         return super.volume()*this.depth;
//     }
// }
//
// let boxObj : Box;
// boxObj = new BoxWeight(10,20,30,40);
//
// console.log(boxObj.volume())

// Sử dụng từ khóa "super"

// class Rectangle {
//      name: string;
//     height: any;
//     width: any;
//     private area: any;
//     constructor(height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//     getArea() {
//         return this.height * this.width;
//     }
//     setArea(value) {
//         this.area = value;
//     }
// }
//
// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length);
//         this.name = 'Square';
//     }
// }

// Super - gọi đến các phương thức tĩnh

// class Rectangle {
//     static  logNbSides() {
//         return ' I have 4 sides';
//     }
// }
//
// class Square extends Rectangle {
//     static logDescription() {
//         return super.logNbSides() + ' which are all equal'
//     }
// }
// console.log(Square.logDescription())