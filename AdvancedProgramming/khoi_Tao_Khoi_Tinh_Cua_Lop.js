// class ClassWithStaticInitializationBlock {
//
//     static starticProberty1 = '1';
//
//     static starticProberty2;
//
//     static {
//
//         this.starticProberty2 = '2';
//
//     }
// }
//
// console.log(ClassWithStaticInitializationBlock.starticProberty1);
//
// console.log(ClassWithStaticInitializationBlock.starticProberty2)
// let y = 'Outer y';
//
// class A {
//
//     static field = 'Inner y'
//
//     static {
//
//         let y = this.field
//
//     }
// }
//
// console.log(y)
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.field1 = console.log('field1 called');
    (function () {
        console.log('Class static block #1 called');
    })();
    MyClass.field2 = console.log('field2 called');
    (function () {
        console.log('Class static block #2 called');
    })();
    return MyClass;
}());
