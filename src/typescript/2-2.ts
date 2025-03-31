export function calculate(
    operation: 'add' | 'subtract' | 'multiply' | 'divide',
    num1: number,
    num2: number
): number {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            return num1 / num2;
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }
}

console.log(calculate('add', 10, 5));
console.log(calculate('subtract', 10, 5));
console.log(calculate('multiply', 10, 5));
console.log(calculate('divide', 10, 2));
