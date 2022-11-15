import {fizzBuzz} from "./list";
describe("fizzBuzz()", () => {
    test(' phai tra ve gia tri FizzBuzz', () => {
       let result = fizzBuzz(15);
       expect(result).toBe("a");
    });
    test(' phai tra ve gia tri FizzBuzz', () => {
        let result = fizzBuzz(9);
        expect(result).toBe("b");
    });
});