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
  constructor(displayBeforeValue, displayActualValue) {
    // Elements to modify
    this.displayActualValue = displayActualValue;
    this.displayBeforeValue = displayBeforeValue;

    // Numbers to save
    this.actualValue = "";
    this.beforeValue = "";

    this.calculator = new Calculator();

    // Operation to save
    this.operationType = undefined;

    // Operations types
    this.symbols = {
      plus: "+",
      substract: "-",
      split: "/",
      multiply: "*",
    };
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    this.actualValue += number.toString();
    this.printValue();
  }

  printValue() {
    this.displayActualValue.value = this.actualValue;
    this.displayBeforeValue.value = `${this.beforeValue} ${
      this.symbols[this.operationType] || ""
    }`;
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

  calculate() {
    // Transform strings to Numbers
    const beforeValue = parseFloat(this.beforeValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(beforeValue)) return;
    this.actualValue = this.calculator[this.operationType](
      beforeValue,
      actualValue
    );
  }

  computed(type) {
    this.operationType !== "equal" && this.calculate();
    this.operationType = type;
    this.beforeValue = this.actualValue || this.beforeValue;
    this.actualValue = "";
    this.printValue();
  }
}
