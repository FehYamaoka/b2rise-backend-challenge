import { isNumberEven, doubleEvens } from '../3-3';

describe('isNumberEven function', () => {
    it('should return true for even numbers', () => {
        expect(isNumberEven(2)).toBe(true);
        expect(isNumberEven(4)).toBe(true);
        expect(isNumberEven(0)).toBe(true);
    });

    it('should return false for odd numbers', () => {
        expect(isNumberEven(1)).toBe(false);
        expect(isNumberEven(3)).toBe(false);
        expect(isNumberEven(5)).toBe(false);
    });
});

describe('doubleEvens function', () => {
    it('should double only even numbers in the array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = doubleEvens(numbers);
        expect(result).toEqual([4, 8]);
    });

    it('should return an empty array when no even numbers are present', () => {
        const numbers = [1, 3, 5, 7];
        const result = doubleEvens(numbers);
        expect(result).toEqual([]);
    });

    it('should return an empty array when the input is an empty array', () => {
        const numbers: number[] = [];
        const result = doubleEvens(numbers);
        expect(result).toEqual([]);
    });

    it('should return doubled even numbers for a larger array', () => {
        const numbers = [10, 15, 20, 25];
        const result = doubleEvens(numbers);
        expect(result).toEqual([20, 40]);
    });
});
