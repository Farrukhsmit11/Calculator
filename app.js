let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    let expression = display.value;
    let result;

    if (expression.includes('+')) {
        [operand1, operand2] = expression.split('+');
        result = parseFloat(operand1) + parseFloat(operand2);
    } else if (expression.includes('-')) {
        [operand1, operand2] = expression.split('-');
        result = parseFloat(operand1) - parseFloat(operand2);
    } else if (expression.includes('*')) {
        [operand1, operand2] = expression.split('*');
        result = parseFloat(operand1) * parseFloat(operand2);
    } else if (expression.includes('/')) {
        [operand1, operand2] = expression.split('/');
        result = parseFloat(operand1) / parseFloat(operand2);
    }

    display.value = result;
}
