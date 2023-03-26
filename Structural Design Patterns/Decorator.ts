type Pasta = {
  pasta: string;
  price: number;
  getPrice: () => number;
};

const createPasta = (): Pasta => {
  const pasta: Pasta = {
    pasta: "spagetti",
    price: 0,
    getPrice() {
      return this.price;
    },
  };

  return pasta;
};

const createPenne = (): Pasta => {
  const penne: Pasta = {
    ...createPasta(),
    price: 8,
  };

  return penne;
};

const createPastaPattern = (pasta: Pasta): Pasta => {
  const pastaPattern: Pasta = {
    ...createPasta(),
    pasta: "spagetti",
    getPrice() {
      return this.pasta.getPrice();
    },
  };

  return pastaPattern;
};

const createSaucePattern = (pasta: Pasta): Pasta => {
  const saucePattern: Pasta = {
    ...createPastaPattern(pasta),
    getPrice() {
      return super.getPrice() + 5;
    },
  };

  return saucePattern;
};

const createCheesePattern = (pasta: Pasta): Pasta => {
  const cheesePattern: Pasta = {
    ...createPastaPattern(pasta),
    getPrice() {
      return super.getPrice() + 3;
    },
  };

  return cheesePattern;
};

export { createPenne, createSaucePattern, createCheesePattern };
