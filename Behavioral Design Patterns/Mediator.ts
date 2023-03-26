interface TrafficTower {
  airplanes: Airplane[];
  requestPositions: () => void;
}

interface Airplane {
  position: number;
  trafficTower: TrafficTower;
}

function createTrafficTower() {
  return {
    airplanes: [],
  };
}

function createAirplane(
  position: number,
  trafficTower: TrafficTower
): Airplane {
  const airplane: Airplane = {
    position,
    trafficTower,
  };
  trafficTower.airplanes.push(airplane);
  return airplane;
}

function requestPositions(this: Airplane) {
  return this.trafficTower.requestPositions();
}

function requestPositionsTower(this: TrafficTower): number[] {
  return this.airplanes.map((airplane: Airplane) => airplane.position);
}

export {
  createTrafficTower as TrafficTower,
  createAirplane as Airplane,
  requestPositions,
  requestPositionsTower,
};
