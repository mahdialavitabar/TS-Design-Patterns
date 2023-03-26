type DiscountFunction = (amount: number) => number;

function createShoppingCart(discount: DiscountFunction) {
  let amount = 0;

  function checkout() {
    return discount(amount);
  }

  function setAmount(newAmount: number) {
    amount = newAmount;
  }

  return { checkout, setAmount };
}

function guestDiscount(amount: number) {
  return amount;
}

function regularDiscount(amount: number) {
  return amount * 0.9;
}

function premiumDiscount(amount: number) {
  return amount * 0.8;
}

export {
  createShoppingCart,
  guestDiscount as guestPattern,
  regularDiscount as regularPattern,
  premiumDiscount as premiumPattern,
};
