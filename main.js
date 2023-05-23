import { Display } from "./classes.js";

const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
const buttonsNumber = document.querySelectorAll(".number");
const buttonOperator = document.querySelectorAll(".operator");
const btnClear = document.querySelector(".calc__btn--clear");
const btnBack = document.querySelector(".calc__btn--back");

const display = new Display(operation, result);

buttonsNumber.forEach((button) => {
  button.addEventListener("click", () => {
    display.addNumber(button.querySelector("i").innerHTML);
  });
});

btnClear.addEventListener("click", () => {
  display.clearAll();
});

btnBack.addEventListener("click", () => {
  display.clearOne();
});
