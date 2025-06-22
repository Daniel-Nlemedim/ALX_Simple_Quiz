const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultDisplay = document.getElementById("calculation-result");

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide (number1, number2){
    if (number2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
}

function getNumberAndCalculate(operation) {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);

    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    try {
        result = operation(number1, number2);
        resultDisplay.textContent = `Result: ${result}`;
    } catch (error) {
        resultDisplay.textContent = error.message;
    }
}

addBtn.addEventListener("click", () => getNumberAndCalculate(add));
subtractBtn.addEventListener("click", () => getNumberAndCalculate(subtract));
multiplyBtn.addEventListener("click", () => getNumberAndCalculate(multiply));
divideBtn.addEventListener("click", () => getNumberAndCalculate(divide));
