const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
let currentInput = "";
let firstOperand = null;
let operator = null;
let resultDisplayed = false;

function handleInput(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    evaluate();
    resultDisplayed = true;
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
      operator = value;
      currentInput = "";
    } else if (currentInput !== "") {
      evaluate();
      operator = value;
    }
  } else {
    if (resultDisplayed) {
      clearDisplay();
      resultDisplayed = false;
    }
    appendToDisplay(value);
  }
}

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  firstOperand = null;
  operator = null;
  display.value = "";
  resultDisplayed = false;
}

function evaluate() {
    if (firstOperand !== null && operator !== null && currentInput !== "") {
      const secondOperand = parseFloat(currentInput);
      let result;
  
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
      }
  
      display.value = result.toFixed(2); // Ajusta el número de decimales
      currentInput = result.toFixed(2); // También ajusta el resultado interno
      firstOperand = result;
      resultDisplayed = true;
    }
  }

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInput(button.textContent);
  });
});
