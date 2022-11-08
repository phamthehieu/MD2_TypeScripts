// const calculateValue = (input: number): number => {
//     if (input < 1) return 0;
//     if (input < 2) return 1;
//     return calculateValue(input - 2) + calculateValue(input - 1);
// };
//
// let num = 0;
// for (let n = 0; n < 10; ++n) {
//     const value = calculateValue(n);
//     num += value;
// }
// console.log(num);
function fibonacci() {
    var a = 1;
    var b = 1;
    var temp = 0;
    var sum = 0;
    console.log(a, b);
    for (var i = 0; i < 8; i++) {
        temp = a + b;
        a = b;
        b = temp;
        console.log(temp);
        sum += temp;
    }
    console.log(sum);
}
fibonacci();
