interface Droid {
  info(): string;
}

function B1(): Droid {
  return {
    info: () => "B1, Battle Droid",
  };
}

function Rx24(): Droid {
  return {
    info: () => "Rx24, Pilot Droid",
  };
}

function droidProducer(kind: string): () => Droid {
  if (kind === "battle") return battleDroidPattern;
  return pilotDroidPattern;
}

function battleDroidPattern(): Droid {
  return B1();
}

function pilotDroidPattern(): Droid {
  return Rx24();
}

export default droidProducer;
