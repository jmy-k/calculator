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

function operate(firstNumber,secondNumber,operator){
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    if (operator === "+"){
        return add(a,b);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator === "*"){
        return multiply(a,b);
    }
    else if (operator === "/"){
        return divide(a,b);
    }
}

let value = {};
let displayValue = document.querySelector('.display');
let firstNumber=""
let secondNumber=""

const calculator = document.querySelectorAll('.button');
calculator.forEach((button)=>{
    button.addEventListener('click',() =>{
        if (button.id === "1"){
            if (Object.keys(value).length===0){
                firstNumber += "1";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="1";
            }
            displayValue.textContent += "1";
        }
        else if (button.id === "2"){
            if (Object.keys(value).length===0){
                firstNumber += "2";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="2";
            }
            displayValue.textContent += "2";
        }
        else if (button.id === "3"){
            if (Object.keys(value).length===0){
                firstNumber += "3";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="3";
            }
            displayValue.textContent += "3";
        }
        else if (button.id === "4"){
            if (Object.keys(value).length===0){
                firstNumber += "4";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="4";
            }
            displayValue.textContent += "4";
        }
        else if (button.id === "5"){
            if (Object.keys(value).length===0){
                firstNumber += "5";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="5";
            }
            displayValue.textContent += "5";
        }
        else if (button.id === "6"){
            if (Object.keys(value).length===0){
                firstNumber += "6";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="6";
            }
            displayValue.textContent += "6";
        }
        else if (button.id === "7"){
            if (Object.keys(value).length===0){
                firstNumber += "7";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="7";
            }
            displayValue.textContent += "7";
        }
        else if (button.id === "8"){
            if (Object.keys(value).length===0){
                firstNumber += "8";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="8";
            }
            displayValue.textContent += "8";
        }
        else if (button.id === "9"){
            if (Object.keys(value).length===0){
                firstNumber += "9";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="9";
            }
            displayValue.textContent += "9";
        }
        else if (button.id === "0"){
            if (Object.keys(value).length===0){
                firstNumber += "0";
            }
            else if (typeof value.Operator === 'string' && value.Operator.length){
                secondNumber +="0";
            }
            displayValue.textContent += "0";
        }


        else if (button.id === "+"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (typeof value.firstNumber === 'string' && value.firstNumber.length){
                value.Operator = "+";
            }
            displayValue.textContent += "+";
        }
        else if (button.id === "-"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (typeof value.firstNumber === 'string' && value.firstNumber.length){
                value.Operator = "-";
            }
            displayValue.textContent += "-";
        }
        else if (button.id === "*"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (typeof value.firstNumber === 'string' && value.firstNumber.length){
                value.Operator = "*";
            }
            displayValue.textContent += "*";
        }
        else if (button.id === "/"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (typeof value.firstNumber === 'string' && value.firstNumber.length){
                value.Operator = "/";
            }
            displayValue.textContent += "/";
        }
        else if (button.id==="equal"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            let operator = value.Operator;
            let solution=(operate(firstNumber,secondNumber,operator));
            displayValue.textContent = solution;
            firstNumber="";
            secondNumber="";
            value.firstNumber = solution;
            value.secondNumber="";
            value.Operator="";
        }
        else if (button.id === "clear"){
            displayValue.textContent = "";
            firstNumber="";
            secondNumber="";
            for (const key in value) {
                delete value[key];
              }

        }

    })
})