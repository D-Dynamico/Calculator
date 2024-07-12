let Num1 = null;
let Num2 = null;
let displayValue = "";
let operator = "";

function updateDisplay(value) {
    displayValue += value;
    document.querySelector('.displayScreen').textContent = displayValue;
}

document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        updateDisplay(event.target.textContent);
    });
});

document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
        const clickedOperator = event.target.textContent;

        if (clickedOperator === 'C') {
            clear();
        } else if (clickedOperator === '⌫') {
            backSpace();
        } else if (clickedOperator === '=') {
            if (operator !== "" && Num1 !== null && displayValue !== "") {
                Num2 = parseFloat(displayValue);
                let result = operations(Num1, Num2, operator);
                result = result.toString();
                if (result.length <= 4) {
                    displayValue = result;
                } else {
                    displayValue = Number(result).toFixed(5);
                }
                document.querySelector('.displayScreen').textContent = displayValue;
                Num1 = Number(result);
                Num2 = null;
                operator = "";
            }
        } else {
            if (operator !== "" && Num1 !== null && displayValue !== "") {
                Num2 = parseFloat(displayValue);
                let result = operations(Num1, Num2, operator);
                result = result.toString();
                if (result.length <= 4) {
                    displayValue = result;
                } else {
                    displayValue = Number(result).toFixed(5);
                }
                document.querySelector('.displayScreen').textContent = displayValue;
                Num1 = Number(result);
                Num2 = null;
            } else {
                Num1 = parseFloat(displayValue);
            }
            operator = clickedOperator;
            displayValue = "";
        }
    });
});

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    if(b!==0){
        return a/b;
    }
    else{
        return "undefined";
    }
}

function inversion(a){
    return -1*a;
}

function clear(){
    Num1='';
    Num2='';
    operator=''
    displayValue='';
    document.querySelector('.displayScreen').textContent = displayValue;
}

function backSpace(){
    if(displayValue!==''){
        displayValue='';
    }
    document.querySelector('.displayScreen').textContent = displayValue;
}

function operations(Num1, Num2, operator) {
    switch (operator) {
        case '+':
            return add(Num1, Num2);
        case '-':
            return subtract(Num1, Num2);
        case 'X':
            return multiply(Num1, Num2);
        case '÷':
            return divide(Num1, Num2);
        default:
            return Num2;
    }
}