import { processItems } from "../3-1";

describe('processItems function', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should log "is expensive" when the item price is greater than 100', () => {
        const items = [
            { name: 'Item 1', price: 150 },
            { name: 'Item 2', price: 80 }
        ];

        processItems(items);

        expect(console.log).toHaveBeenCalledWith('Item 1 is expensive');
        expect(console.log).not.toHaveBeenCalledWith('Item 2 is expensive');
    });

    it('should log "No items to process." when the items array is empty', () => {
        const items: any[] = [];

        processItems(items);

        expect(console.log).toHaveBeenCalledWith('No items to process.');
    });

    it('should log "No items to process." when the input is not an array', () => {
        const invalidInput = null;

        processItems(invalidInput as any);

        expect(console.log).toHaveBeenCalledWith('No items to process.');
    });

    it('should handle an array with no items above 100 in price', () => {
        const items = [
            { name: 'Pen', price: 2 },
            { name: 'Book', price: 20 }
        ];

        processItems(items);

        expect(console.log).not.toHaveBeenCalled();
    });
});
