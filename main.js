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
    if(num1 === 0 || num2=== 0)
        return alert("Can not divide 0")
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

let numDisplay = document.querySelector(".num-container");
document.querySelectorAll('.number').forEach(elem => elem.addEventListener('click', (e) => populate(e)));
document.querySelectorAll(".operator").forEach(elem => elem.addEventListener('click', (e) => saveOperand(e.target.textContent)));
document.querySelector('.equal').addEventListener('click', solve)
document.querySelector(".clear").addEventListener('click', () => {
    numDisplay.textContent = '';
    number1 = undefined;
    number2 = undefined;
    operator = ''
})
document.querySelector('.equal').addEventListener('click', solve);

function populate(e) {
    console.log(isNaN(number2), number2)
    if(!isNaN(number1) && isNaN(number2)){
        numDisplay.textContent = e.target.textContent;
        number2 = numDisplay.textContent;
    }
    else     
        numDisplay.textContent += e.target.textContent;

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
    if (!isNaN(number1) && !isNaN(number2) && operator) {
        numDisplay.textContent = Math.round(operate(operator, number1, number2) *100) /100;
    }
    number1 = numDisplay.textContent;
    number2 = undefined;
    operator = '';
}