interface Printer {
  ink: Ink;
  print: () => void;
}

interface Ink {
  get(): string;
}

function createEpsonPrinter(ink: Ink): Printer {
  function print() {
    return "Printer: Epson, Ink: " + ink.get();
  }

  return { ink, print };
}

function createHPprinter(ink: Ink): Printer {
  function print() {
    return "Printer: HP, Ink: " + ink.get();
  }

  return { ink, print };
}

function createAcrylicInk(): Ink {
  function get() {
    return "acrylic-based";
  }

  return { get };
}

function createAlcoholInk(): Ink {
  function get() {
    return "alcohol-based";
  }

  return { get };
}

export {
  createEpsonPrinter,
  createHPprinter,
  createAcrylicInk,
  createAlcoholInk,
};
