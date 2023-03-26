abstract class Tax {
  abstract overThousand(value: number): number;

  calc(value: number) {
    if (value >= 1000) value = this.overThousand(value);

    return this.complementaryFee(value);
  }

  complementaryFee(value: number) {
    return value + 10;
  }
}

function createTax1(): Tax {
  return {
    overThousand(value: number) {
      return value * 1.1;
    },
    calc(value: number) {
      if (value >= 1000) value = this.overThousand(value);

      return this.complementaryFee(value);
    },
    complementaryFee(value: number) {
      return value + 10;
    },
  };
}

function createTax2(): Tax {
  return {
    overThousand(value: number) {
      return value * 1.2;
    },
    calc(value: number) {
      if (value >= 1000) value = this.overThousand(value);

      return this.complementaryFee(value);
    },
    complementaryFee(value: number) {
      return value + 10;
    },
  };
}

export { createTax1 as Tax1, createTax2 as Tax2 };
