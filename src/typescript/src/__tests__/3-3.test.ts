import { makeAllPositive } from "../3-3";

describe('makeAllPositive function', () => {
    it('should convert all negative numbers to positive without modifying the original array', () => {
        const numbers = [-1, 2, -3, 4];
        const result = makeAllPositive(numbers);

        expect(numbers).toEqual([-1, 2, -3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should return an empty array when given an empty array', () => {
        const numbers: number[] = [];
        const result = makeAllPositive(numbers);

        expect(numbers).toEqual([]);
        expect(result).toEqual([]);
    });

    it('should return the same array if all numbers are already positive', () => {
        const numbers = [1, 2, 3, 4];
        const result = makeAllPositive(numbers);

        expect(numbers).toEqual([1, 2, 3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should handle an array with only negative numbers', () => {
        const numbers = [-1, -2, -3];
        const result = makeAllPositive(numbers);

        expect(numbers).toEqual([-1, -2, -3]);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return the same array if all numbers are zero', () => {
        const numbers = [0, 0, 0];
        const result = makeAllPositive(numbers);

        expect(numbers).toEqual([0, 0, 0]);
        expect(result).toEqual([0, 0, 0]);
    });
});
