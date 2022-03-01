const defaultNum = 1;

const add = (num1, num2) => { return num1 + num2; }
const minus = (num1, num2) => { return num1 - num2; }
const multiple = (num1, num2) => { return num1 * num2; }
const divide = (num1, num2) => { return num1 / num2; }

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() { return this.num1 + this.num2; }
  minus() { return this.num1 - this.num2; }
  multiple() { return this.num1 * this.num2; }
  divide() { return this.num1 / this.num2; }
}

module.exports = {
  defaultNum,
  add,
  minus,
  multiple,
  divide,
  Calculator
}
