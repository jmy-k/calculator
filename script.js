function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

var firstNumber;
var secondNumber;
var operand;

function operate(firstNumber,secondNumber,operand){
    let a = firstNumber;
    let b = secondNumber;
    if (operand === "+"){
        return add(a,b);
    }
    else if (operand === "-"){
        return subtract(a,b);
    }
    else if (operand === "*"){
        return multiply(a,b);
    }
    else if (operand === "/"){
        return divide(a,b);
    }
}

let displayValue = {};

const calculator = document.querySelectorAll('.button');
calculator.forEach((button)=>{
    button.addEventListener('click',() =>{
        if (button.id === "1"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 1;
            }
        }
        else if (button.id === "2"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 2;
            }
        }
        else if (button.id === "3"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 3;
            }
        }
        else if (button.id === "4"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 4;
            }
        }
        else if (button.id === "5"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber = 5;
            }
        }
        else if (button.id === "6"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 6;
            }
        }
        else if (button.id === "7"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 7;
            }
        }
        else if (button.id === "8"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 8;
            }
        }
        else if (button.id === "9"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 9;
            }
        }
        else if (button.id === "0"){
            if (Object.keys(displayValue).length===0){
                displayValue.firstNumber= 0;
            }
        }
    })
})