const PRICE_THRESHOLD = 100;

type Item = {
    name: string;
    price: number;
};

export function processItems(items: Item[]): void {
    if (!Array.isArray(items) || items.length === 0) {
        console.log("No items to process.");
        return;
    }

    items.forEach(item => {
        if (item.price > PRICE_THRESHOLD) {
            itemPriceIsExpensive(item);
        }
    });
}

function itemPriceIsExpensive(item: Item): void {
    console.log(`${item.name} is expensive`);
}

const items = [
    { name: "Item 1", price: 150 },
    { name: "Item 2", price: 80 },
];

processItems(items);