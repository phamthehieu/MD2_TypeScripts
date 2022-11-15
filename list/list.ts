export function fizzBuzz(input: number): number | string{
    if (typeof input !== 'number')
        throw new Error('Input should be a number')
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'a'
    if (input % 3 === 0)
        return 'b'
    if (input % 5 === 0)
        return 'c'
}
// console.log(fizzBuzz(15))
// console.log(fizzBuzz(9))