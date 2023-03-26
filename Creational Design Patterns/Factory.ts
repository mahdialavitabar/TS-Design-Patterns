interface Tesla {
  model: string;
  price: number;
  maxSpeed: number;
}

function createTesla(type: string): Tesla {
  if (type === "ModelX") return { model: type, price: 108000, maxSpeed: 300 };
  if (type === "ModelS") return { model: type, price: 111000, maxSpeed: 320 };
  throw new Error(`Invalid Tesla model: ${type}`);
}

export default createTesla;
