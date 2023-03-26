//Equipment
interface Equipment {
  getName(): string;
  setName(name: string): void;
  getPrice(): number;
}

function createEquipment(name: string, price: number): Equipment {
  return {
    getName: function () {
      return this.name;
    },
    setName: function (name) {
      this.name = name;
    },
    getPrice: function () {
      return this.price || 0;
    },
  };
}

interface Pattern extends Equipment {
  equipments: Equipment[];
  add(equipment: Equipment): void;
}

function createPattern(): Pattern {
  const pattern: Pattern = {
    equipments: [],
    add: function (equipment) {
      this.equipments.push(equipment);
    },
    getPrice: function () {
      return this.equipments
        .map(function (equipment) {
          return equipment.getPrice();
        })
        .reduce(function (a, b) {
          return a + b;
        });
    },
    getName: function () {
      return "pattern";
    },
    setName: function (name) {
      // do nothing
    },
  };

  return pattern;
}

function createCabinet(): Pattern {
  const cabinet: Pattern = createPattern();
  cabinet.setName("cabinet");
  return cabinet;
}

// --- leafs ---
function createFloppyDisk(): Equipment {
  const floppyDisk: Equipment = createEquipment("Floppy Disk", 70);
  return floppyDisk;
}

function createHardDrive(): Equipment {
  const hardDrive: Equipment = createEquipment("Hard Drive", 250);
  return hardDrive;
}

function createMemory(): Equipment {
  const memory: Equipment = createEquipment("Memory", 280);
  return memory;
}

export { createCabinet, createFloppyDisk, createHardDrive, createMemory };
