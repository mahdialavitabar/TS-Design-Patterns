interface Instruction {
  execute: () => void;
}

interface Cockpit {
  instruction: Instruction;
}

interface Turbine {
  state: boolean;
  on: () => void;
  off: () => void;
}

interface OnInstruction {
  turbine: Turbine;
}

interface OffInstruction {
  turbine: Turbine;
}

function execute(this: Cockpit) {
  this.instruction.execute();
}

function on(this: Turbine) {
  this.state = true;
}

function off(this: Turbine) {
  this.state = false;
}

function executeOn(this: OnInstruction) {
  this.turbine.on();
}

function executeOff(this: OffInstruction) {
  this.turbine.off();
}

export { Cockpit, Turbine, OnInstruction, OffInstruction, Instruction };
