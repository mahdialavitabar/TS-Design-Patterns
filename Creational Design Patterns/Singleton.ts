interface Person {}

function createPerson(): Person {
  let instance: Person;

  return function () {
    if (typeof instance === "object") {
      return instance;
    }

    instance = {};

    return instance;
  };
}

export default createPerson();
