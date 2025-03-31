import { extractValues } from "../1-1";

type Props = {
    id: number;
    name: string;
};

describe('extractValues function', () => {
    it('should extract the correct values from an array of objects', () => {
        const data: Props[] = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];

        expect(extractValues(data, 'name')).toEqual(['Alice', 'Bob']);
        expect(extractValues(data, 'id')).toEqual([1, 2]);
    });

    it('should return an empty array when given an empty array', () => {
        const data: Props[] = [];
        expect(extractValues(data, 'name')).toEqual([]);
    });

    it('should throw an error when the array does not match the Props type', () => {
        const invalidData = [
            { id: 1, nome: 'Alice' },
            { id: 2, nome: 'Bob' }
        ];

        expect(() => {
            extractValues(invalidData as any[], 'name');
        }).toThrow('Key "name" not found in object.');
    });

    it('should throw an error if the key does not exist in the Props type', () => {
        const data: Props[] = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];

        expect(() => {
            extractValues(data as any[], 'age' as any);
        }).toThrow('Key "age" not found in object.');
    });
});
