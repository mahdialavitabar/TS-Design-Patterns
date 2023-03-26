interface Product {
  price: number;
}

interface Discount {
  calc(products: Product[]): number;
}

function createShoppingCart() {
  const products: Product[] = [];

  function addProduct(p: Product): void {
    products.push(p);
  }

  return { addProduct };
}

function createNumberDiscount() {
  let next: Discount | null = null;

  function setNext(fn: Discount): void {
    next = fn;
  }

  function exec(products: Product[]): number {
    let result = 0;
    if (products.length > 3) result = 0.05;

    return result + (next ? next.calc(products) : 0);
  }

  return { setNext, exec };
}

function createPriceDiscount() {
  let next: Discount | null = null;

  function setNext(fn: Discount): void {
    next = fn;
  }

  function exec(products: Product[]): number {
    let result = 0;
    let total = products.reduce((a, b) => a + b.price, 0);

    if (total >= 500) result = 0.1;

    return result + (next ? next.calc(products) : 0);
  }

  return { setNext, exec };
}

function createNoneDiscount() {
  function exec(): number {
    return 0;
  }

  return { exec };
}

export {
  createShoppingCart as ShoppingCart,
  createNumberDiscount as NumberDiscount,
  createPriceDiscount as PriceDiscount,
  createNoneDiscount as NoneDiscount,
  Discount,
};
