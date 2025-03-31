const BASE_PRICE = 100;
const PREMIUM_DISCOUNT = 0.8;
const REGULAR_DISCOUNT = 0.9;

function applyDiscount(price: number, discount: number): number {
    return price * discount;
}

function getDiscountForUser(price: number, isPremium: boolean): number {
    const isValidForDiscount = price > BASE_PRICE;

    if (isPremium) {
        return isValidForDiscount ? PREMIUM_DISCOUNT : REGULAR_DISCOUNT;
    }

    return isValidForDiscount ? REGULAR_DISCOUNT : 1;
}

export function getFinalPrice(price: number, isPremium: boolean): number {
    const discount = getDiscountForUser(price, isPremium);

    return applyDiscount(price, discount);
}

const price = 120;
const isPremium = true;
const finalPrice = getFinalPrice(price, isPremium);

console.log(`Final price: ${finalPrice}`);
