interface Attacker {
  attack(): number;
}

function createSoldier(level: number): Attacker {
  return {
    attack: () => level * 1,
  };
}

function createJedi(level: number): { attackWithSaber: () => number } {
  return {
    attackWithSaber: () => level * 100,
  };
}

function createJediPattern(jedi: { attackWithSaber: () => number }): Attacker {
  return {
    attack: () => jedi.attackWithSaber(),
  };
}

export {
  createSoldier as Soldier,
  createJedi,
  createJediPattern as JediPattern,
};
