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
class MyClass {
    static field1 = console.log('field1 called');
    static {
        console.log('Class static block #1 called');
    }
    static field2 = console.log('field2 called');
    static {
        console.log('Class static block #2 called');
    }
}