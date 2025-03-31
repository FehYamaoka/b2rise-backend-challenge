import { calculate } from "../2-2";

describe('calculate function', () => {
    it('should correctly add two numbers', () => {
        expect(calculate('add', 10, 5)).toBe(15);
    });

    it('should correctly subtract two numbers', () => {
        expect(calculate('subtract', 10, 5)).toBe(5);
    });

    it('should correctly multiply two numbers', () => {
        expect(calculate('multiply', 10, 5)).toBe(50);
    });

    it('should correctly divide two numbers', () => {
        expect(calculate('divide', 10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => calculate('divide', 10, 0)).toThrow(new Error('Division by zero'));
    });

    it('should throw an error for an unsupported operation', () => {
        expect(() => calculate('somatoria' as any, 10, 5)).toThrow(new Error('Unsupported operation: somatoria'));
    });
});
