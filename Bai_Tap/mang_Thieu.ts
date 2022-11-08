let number: number[] = [1, 2, 4, 5, 6, 8, 10];

let ouput = [];

let i = 0;

while (i < number.length) {

    if (number.indexOf(i) === -1) {

        ouput.push(i)

    }

        i++;

}
console.log(ouput);