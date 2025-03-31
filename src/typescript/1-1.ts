export function extractValues<T extends object, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => {
        if (!(key in item)) {
            throw new Error(`Key "${String(key)}" not found in object.`);
        }
        return item[key];
    });
}

type Props = {
    id: number;
    name: string;
};

const data: Props[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const result = extractValues(data, 'name');

console.log(result);
