function calcShopPatternPrice(price: number): number {
  const discount = calcDiscount(price);
  const fees = calcFees(discount);
  const shipping = calcShipping();

  return discount + fees + shipping;
}

function calcDiscount(value: number): number {
  return value * 0.9;
}

function calcShipping(): number {
  return 5;
}

function calcFees(value: number): number {
  return value * 1.05;
}

export default calcShopPatternPrice;
