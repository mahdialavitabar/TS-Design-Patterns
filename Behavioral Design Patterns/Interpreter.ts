interface Sum {
  left: Pattern;
  right: Pattern;
  pattern: () => void;
}

interface Min {
  left: Pattern;
  right: Pattern;
  pattern: () => void;
}

interface Num {
  val: number;
  pattern: () => void;
}

type Pattern = Sum | Min | Num;

function pattern(this: Sum) {
  return this.left.pattern() + this.right.pattern();
}

function pattern(this: Min) {
  return this.left.pattern() - this.right.pattern();
}

function pattern(this: Num) {
  return this.val;
}

export { Num, Min, Sum, Pattern };
