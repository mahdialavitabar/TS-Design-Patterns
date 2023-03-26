interface Pattern {
  index: number;
  elements: any[]; // Change `any` to the appropriate type
  next: () => void;
  hasNext: () => void;
}

function createPattern(el: any[]): Pattern {
  return {
    index: 0,
    elements: el,
    next() {
      return this.elements[this.index++];
    },
    hasNext() {
      return this.index < this.elements.length;
    },
  };
}

export default createPattern;
