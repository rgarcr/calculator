//function for add, subtract, multiply, divide

let number1 = undefined;
let number2 = undefined;
let operator = ''

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

let numDisplay = document.querySelector(".num-container");
let numDisplayValue = '';
document.querySelectorAll('.number').forEach(elem => elem.addEventListener('click', (e) => populate(e)));
document.querySelectorAll(".operator").forEach(elem => elem.addEventListener('click', (e) => saveOperand(e.target.textContent)));
document.querySelector('.equal').addEventListener('click', solve)
document.querySelector(".clear").addEventListener('click', clear)
document.querySelector('.equal').addEventListener('click', solve);
document.querySelector(".delete").addEventListener("click", deleteVal);

function populate(e) {
    //check if number1 has a number and number2 has no value, add value to number2
    if (!isNaN(number1) && !number2) {
        numDisplay.textContent = e.target.textContent;
        number2 = numDisplay.textContent;
    }
    else if (numDisplay.textContent.includes('.') && e.target.textContent === '.')
        return
    else if (typeof (number1) === 'number') {
        numDisplay.textContent += e.target.textContent;
        number2 = numDisplay.textContent;
    }
    else {
        numDisplay.textContent += e.target.textContent;
    }

}

function saveOperand(str) {
    if (numDisplay.textContent && !operator) {
        number1 = Number(numDisplay.textContent);
        if (str === '+') operator = add;
        if (str === '-') operator = subtract
        if (str === 'x') operator = multiply;
        if (str === "/") operator = divide;
    }
}

function solve() {
    number2 = Number(numDisplay.textContent);
    console.log(number1, number2, operator)
    if(operator === divide)
        if(number1 === 0 || number2 === 0){
            alert('Cannot divide by 0')
            clear();
            return;
        }

    if (!isNaN(number1) && !isNaN(number2) && operator) {
        numDisplay.textContent = Math.round(operate(operator, number1, number2) * 100) / 100;
    }
    number1 = numDisplay.textContent;
    number2 = undefined;
    operator = '';
}

function clear(){
    numDisplay.textContent = '';
    number1 = undefined;
    number2 = undefined;
    operator = ''
}

function deleteVal() {
    if (number2) {
        numDisplay.textContent = numDisplay.textContent.slice(0, -1);
        number2 = numDisplay.textContent
    }
    else if (operator) {
        operator = '';
        number1 = number1.toString();
    }
    else if (numDisplay.textContent) {
        numDisplay.textContent = numDisplay.textContent.slice(0, -1);
    }
    else {
        return
    }
}