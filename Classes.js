export class Calculator {
  plus(num1, num2) {
    return num1 + num2;
  }

  substract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  split(num1, num2) {
    return num1 / num2;
  }
}

export class Display {
  constructor(operation, result) {
    this.operation = operation;
    this.result = result;
    this.calculator = new Calculator();
    this.actualValue = "";
    this.beforeValue = "";
    this.operationType = undefined;
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    this.actualValue += number.toString();
    this.printValue();
  }

  printValue() {
    this.operation.value = this.actualValue;
    this.result.value = this.beforeValue;
  }

  clearOne() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValue();
  }

  clearAll() {
    this.actualValue = "";
    this.beforeValue = "";
    this.operationType = undefined;
    this.printValue();
  }
}
