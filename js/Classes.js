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
    this.displayBeforeValue = displayBeforeValue;
    this.displayActualValue = displayActualValue;

    this.calculator = new Calculator();

    // Numbers to save
    this.beforeValue = "";
    this.actualValue = "";

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
    this.beforeValue = "";
    this.actualValue = "";
    this.operationType = undefined;
    this.printValue();
  }

  calculate() {
    // Transform strings to Numbers
    const beforeValue = parseInt(this.beforeValue);
    const actualValue = parseInt(this.actualValue);

    console.log(actualValue);
    console.log(beforeValue);

    if (isNaN(actualValue) || isNaN(beforeValue)) return;
    this.actualValue = this.calculator[this.operationType](
      beforeValue,
      actualValue
    );
  }

  computed(type) {
    this.operationType !== "equal" && this.calculate();
    this.operationType = type;
    console.log(this.actualValue);
    this.beforeValue =
      this.actualValue.toString() || this.beforeValue.toString();
    this.actualValue = "";
    this.printValue();
  }
}
