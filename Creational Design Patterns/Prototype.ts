interface Sheep {
  name: string;
  weight: number;
}

function createSheep(name: string, weight: number): Sheep {
  return { name, weight };
}

function cloneSheep(sheep: Sheep): Sheep {
  return createSheep(sheep.name, sheep.weight);
}

export default createSheep;
export { cloneSheep };
