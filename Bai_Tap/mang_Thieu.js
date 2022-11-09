// let number: number[] = [1, 2, 4, 5, 6, 8, 10];
//
// let ouput = [];
//
// let i = 0;
//
// while (i < number.length) {
//
//     if (number.indexOf(i) === -1) {
//
//         ouput.push(i)
//
//     }
//
//         i++;
//
// }
// console.log(ouput);
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = [1, 3, 5, 6, 7, 9];
arr
    .filter(function (value) { return arr1.indexOf(value) < 0; })
    .forEach(function (value) { return console.log(value); });
