function Car() {
  function drive() {
    return "driving";
  }

  return {
    drive,
  };
}

function Driver(age: number) {
  return {
    age,
  };
}

function CarPattern(driver: { age: number }) {
  function drive() {
    return driver.age < 18 ? "too young to drive" : Car().drive();
  }

  return {
    drive,
  };
}

export { Car, CarPattern, Driver };
