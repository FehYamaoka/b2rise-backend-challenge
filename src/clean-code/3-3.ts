export function isNumberEven(number: number): boolean {
    return number % 2 === 0;
}

export function doubleEvens(numbers: number[]): number[] {
    return numbers
        .filter(isNumberEven)
        .map(double);
}

function double(number: number): number {
    return number * 2;
}

const numbersArray = [1, 2, 3, 4, 5];
const doubledEvens = doubleEvens(numbersArray);

console.log(doubledEvens);