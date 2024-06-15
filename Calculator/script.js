// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = '';
    let operand1 = null;
    let operand2 = null;

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                operand1 = null;
                operand2 = null;
                display.textContent = '';
            } else if (value === '=') {
                operand2 = parseFloat(currentInput);
                if (operator && operand1 !== null && operand2 !== null) {
                    let result = 0;
                    if (operator === '+') result = operand1 + operand2;
                    else if (operator === '-') result = operand1 - operand2;
                    else if (operator === '*') result = operand1 * operand2;
                    else if (operator === '/') result = operand1 / operand2;

                    display.textContent = result;
                    currentInput = result.toString();
                    operator = '';
                    operand1 = null;
                    operand2 = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                operand1 = parseFloat(currentInput);
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
