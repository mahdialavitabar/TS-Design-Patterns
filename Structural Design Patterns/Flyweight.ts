interface Color {
  name: string;
}

interface ColorCreator {
  colors: { [name: string]: Color };
  create(name: string): Color;
}

function createColor(name: string): Color {
  return { name };
}

function createColorCreator(): ColorCreator {
  const colors: { [name: string]: Color } = {};

  function create(name: string): Color {
    let color = colors[name];
    if (color) return color;

    colors[name] = createColor(name);

    return colors[name];
  }

  return { colors, create };
}

export { createColorCreator };
