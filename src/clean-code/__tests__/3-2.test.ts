import { getFinalPrice } from '../3-2'

describe('getFinalPrice function', () => {
  it('should apply 20% discount for premium users with price > BASE_PRICE', () => {
    const price = 120;
    const isPremium = true;
    expect(getFinalPrice(price, isPremium)).toBe(96);
  });

  it('should apply 10% discount for premium users with price <= BASE_PRICE', () => {
    const price = 80;
    const isPremium = true;
    expect(getFinalPrice(price, isPremium)).toBe(72);
  });

  it('should apply 10% discount for regular users with price > BASE_PRICE', () => {
    const price = 120;
    const isPremium = false;
    expect(getFinalPrice(price, isPremium)).toBe(108);
  });

  it('should apply no discount for regular users with price <= BASE_PRICE', () => {
    const price = 80;
    const isPremium = false;
    expect(getFinalPrice(price, isPremium)).toBe(80);
  });

  it('should return the price unchanged for regular users with price <= BASE_PRICE', () => {
    const price = 80;
    const isPremium = false;
    expect(getFinalPrice(price, isPremium)).toBe(80);
  });

  it('should return the price with 10% discount for regular users with price > BASE_PRICE', () => {
    const price = 120;
    const isPremium = false;
    expect(getFinalPrice(price, isPremium)).toBe(108);
  });
});
