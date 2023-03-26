type Observer = (product: Product) => void;

interface Product {
  price: number;
  actions: Observer[];

  setBasePrice(val: number): void;
  register(observer: Observer): void;
  unregister(observer: Observer): void;
  notifyAll(): void;
}

function createProduct(): Product {
  const product: Product = {
    price: 0,
    actions: [],

    setBasePrice(val: number) {
      this.price = val;
      this.notifyAll();
    },

    register(observer: Observer) {
      this.actions.push(observer);
    },

    unregister(observer: Observer) {
      this.actions = this.actions.filter((el) => el !== observer);
    },

    notifyAll() {
      this.actions.forEach((el) => el(this));
    },
  };

  return product;
}

function fees(product: Product) {
  product.price = product.price * 1.2;
}

function profit(product: Product) {
  product.price = product.price * 2;
}

export { createProduct, fees, profit };
