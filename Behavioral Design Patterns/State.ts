interface OrderStatus {
  name: string;
  next(): OrderStatus;
}

function waitingForPayment(): OrderStatus {
  return {
    name: "waitingForPayment",
    next: shipping,
  };
}

function shipping(): OrderStatus {
  return {
    name: "shipping",
    next: delivered,
  };
}

function delivered(): OrderStatus {
  return {
    name: "delivered",
    next: delivered,
  };
}

interface Order {
  pattern: OrderStatus;
  nextPattern(): void;
}

function createOrder(): Order {
  return {
    pattern: waitingForPayment(),
    nextPattern() {
      this.pattern = this.pattern.next();
    },
  };
}

export default createOrder;
