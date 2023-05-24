import { Display } from "./classes.js";

const displayBeforeValue = document.querySelector("#before-value");
const displayActualValue = document.querySelector("#actual-value");

const buttonsNumber = document.querySelectorAll(".number");
const buttonsOperator = document.querySelectorAll(".operator");

const btnClear = document.querySelector(".calc__btn--clear");
const btnBack = document.querySelector(".calc__btn--back");

const display = new Display(displayActualValue, displayBeforeValue);

buttonsNumber.forEach((button) => {
  button.addEventListener("click", () => {
    display.addNumber(button.querySelector("i").innerHTML);
  });
});

buttonsOperator.forEach((button) => {
  button.addEventListener("click", () => {
    display.computed(button.value);
  });
});

btnClear.addEventListener("click", () => {
  display.clearAll();
});

btnBack.addEventListener("click", () => {
  display.clearOne();
});
