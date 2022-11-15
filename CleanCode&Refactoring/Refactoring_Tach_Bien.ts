export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let inFizz = n % 3 === 0;
        let inBuzz = n % 5 === 0;
        if (inFizz && inBuzz) {
            this.message = 'FizzBuzz';
        } else if (inBuzz) {
            this.message = 'Fizz';
        } else if (inFizz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}