export function makeAllPositive(numbers: number[]): number[] {
    return numbers.map(num => Math.abs(num));
}

const numbers = [-1, 2, -3, 4];

const result = makeAllPositive(numbers);

console.log(result);
