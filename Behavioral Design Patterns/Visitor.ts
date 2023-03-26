interface IEmployee {
  bonus: number;
  salary: number;
  accept(item: (employee: IEmployee) => void): void;
}

class Manager implements IEmployee {
  bonus = 0;
  constructor(public salary: number) {}
  accept(item: (employee: IEmployee) => void) {
    item(this);
  }
}

class Developer implements IEmployee {
  bonus = 0;
  constructor(public salary: number) {}
  accept(item: (employee: IEmployee) => void) {
    item(this);
  }
}

function bonusPattern(employee: IEmployee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

export { Developer, Manager, bonusPattern };
