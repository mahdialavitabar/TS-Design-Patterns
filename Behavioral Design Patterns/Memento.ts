interface Pattern {
  value: any;
}

function createPattern(value: any): Pattern {
  return {
    value,
  };
}

interface Originator {
  store(val: any): Pattern;
  restore(pattern: Pattern): any;
}

const originator: Originator = {
  store: createPattern,
  restore: function (pattern: Pattern): any {
    return pattern.value;
  },
};

interface Caretaker {
  values: Pattern[];
  addPattern(pattern: Pattern): void;
  getPattern(index: number): Pattern;
}

function createCaretaker(): Caretaker {
  return {
    values: [],
    addPattern(pattern: Pattern): void {
      this.values.push(pattern);
    },
    getPattern(index: number): Pattern {
      return this.values[index];
    },
  };
}

export { originator, createCaretaker as Caretaker };
