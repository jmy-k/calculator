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

let value = {firstNumber:"",secondNumber:"",Operator:""};
let displayValue = document.querySelector('.display');
let firstNumber=""
let secondNumber=""

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
        if (b===0){
            return "cannot divide by zero";
        }
        else{
            return divide(a,b);
        }
    }
        
}

const calculator = document.querySelectorAll('.button');
calculator.forEach((button)=>{
    button.addEventListener('click',() =>{
        if (button.id === "1"){
            if (value.Operator == ""){
                firstNumber += "1";
                value.firstNumber+=1;
            }
            else if (value.Operator !== ""){
                secondNumber +="1";
                value.secondNumber+=1;
            }
            displayValue.textContent += "1";
        }
        else if (button.id === "2"){
            if (value.Operator == ""){
                firstNumber += "2";
                value.firstNumber+=2;
            }
            else if (value.Operator !== ""){
                secondNumber +="2";
                value.secondNumber+=2;
            }
            displayValue.textContent += "2";
        }
        else if (button.id === "3"){
            if (value.Operator == ""){
                firstNumber += "3";
                value.firstNumber+=3;
            }
            else if (value.Operator !== ""){
                secondNumber +="3";
                value.secondNumber+=3;
            }
            displayValue.textContent += "3";
        }
        else if (button.id === "4"){
            if (value.Operator == ""){
                firstNumber += "4";
                value.firstNumber+=4;
            }
            else if (value.Operator !== ""){
                secondNumber +="4";
                value.secondNumber+=4;
            }
            displayValue.textContent += "4";
        }
        else if (button.id === "5"){
            if (value.Operator == ""){
                firstNumber += "5";
                value.firstNumber+=5;
            }
            else if (value.Operator !== ""){
                secondNumber +="5";
                value.secondNumber+=5;
            }
            displayValue.textContent += "5";
        }
        else if (button.id === "6"){
            if (value.Operator == ""){
                firstNumber += "6";
                value.firstNumber+=6;
            }
            else if (value.Operator !== ""){
                secondNumber +="6";
                value.secondNumber+=6;
            }
            displayValue.textContent += "6";
        }
        else if (button.id === "7"){
            if (value.Operator == ""){
                firstNumber += "7";
                value.firstNumber+=7;
            }
            else if (value.Operator !== ""){
                secondNumber +="7";
                value.secondNumber+=7;
            }
            displayValue.textContent += "7";
        }
        else if (button.id === "8"){
            if (value.Operator == ""){
                firstNumber += "8";
                value.firstNumber+=8;
            }
            else if (value.Operator !== ""){
                secondNumber +="8";
                value.secondNumber+=8;
            }
            displayValue.textContent += "8";
        }
        else if (button.id === "9"){
            if (value.Operator == ""){
                firstNumber += "9";
                value.firstNumber+=9;
            }
            else if (value.Operator !== ""){
                secondNumber +="9";
                value.secondNumber+=9;
            }
            displayValue.textContent += "9";
        }
        else if (button.id === "0"){
            if (value.Operator == ""){
                firstNumber += "0";
                value.firstNumber+=0;
            }
            else if (value.Operator !== ""){
                secondNumber +="0";
                value.secondNumber+=0;
            }
            displayValue.textContent += "0";
        }
        else if(button.id==="decimal"){
            if (value.firstNumber!=="" && value.secondNumber !==""&& value.secondNumber.includes(".")===false){
                secondNumber +=".";
                value.secondNumber+=".";
                displayValue.textContent+=".";
            }
            else if (value.firstNumber!==""&& value.secondNumber ==="" && value.firstNumber.includes(".")===false){
                firstNumber+=".";
                value.firstNumber+=".";
                displayValue.textContent+=".";
            }
        }


        else if (button.id === "+"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (value.firstNumber !== "" && value.secondNumber!==""){
                let operator = value.Operator;
                let solution = operate(firstNumber,secondNumber,operator);
                displayValue.textContent = solution;
                firstNumber=solution;
                secondNumber="";
                value.firstNumber = solution;
                value.secondNumber="";
                value.Operator="+";
            }
            else if (value.firstNumber !== "" && value.secondNumber ===""){
                value.Operator = "+";
            }
            if(displayValue.textContent.includes("+") | value.firstNumber===""){
                return
            }
            else{
            displayValue.textContent += "+";}
        }
        else if (button.id === "-"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (value.firstNumber !== "" && value.secondNumber!==""){
                let operator = value.Operator;
                let solution = operate(firstNumber,secondNumber,operator);
                displayValue.textContent = solution;
                firstNumber=solution;
                secondNumber="";
                value.firstNumber = solution;
                value.secondNumber="";
                value.Operator="-";
            }
            else if (value.firstNumber !== "" && value.secondNumber ===""){
                value.Operator = "-";
            }
            if(displayValue.textContent.includes("-") | value.firstNumber===""){
                return
            }
            else{
            displayValue.textContent += "-";}
        }
        else if (button.id === "*"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (value.firstNumber !== "" && value.secondNumber!==""){
                let operator = value.Operator;
                let solution = operate(firstNumber,secondNumber,operator);
                displayValue.textContent = solution;
                firstNumber=solution;
                secondNumber="";
                value.firstNumber = solution;
                value.secondNumber="";
                value.Operator="*";
            }
            else if (value.firstNumber !== "" && value.secondNumber ===""){
                value.Operator = "*";
            }
            if(displayValue.textContent.includes("*") | value.firstNumber===""){
                return
            }
            else{
            displayValue.textContent += "*";}
        }
        else if (button.id === "/"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            if (value.firstNumber !== "" && value.secondNumber!==""){
                let operator = value.Operator;
                let solution = operate(firstNumber,secondNumber,operator);
                displayValue.textContent = solution;
                firstNumber=solution;
                secondNumber="";
                value.firstNumber = solution;
                value.secondNumber="";
                value.Operator="/";
            }
            else if (value.firstNumber !== "" && value.secondNumber ===""){
                value.Operator = "/";
            }
            if(displayValue.textContent.includes("/") | value.firstNumber===""){
                return
            }
            else{
            displayValue.textContent += "/";}
        }
        else if (button.id==="equal"){
            value.firstNumber = firstNumber;
            value.secondNumber = secondNumber;
            let operator = value.Operator;
            let solution = operate(firstNumber,secondNumber,operator);
            displayValue.textContent = solution;
            firstNumber=solution;
            secondNumber="";
            value.firstNumber = solution;
            value.secondNumber="";
            value.Operator="";
        }
        else if (button.id === "clear"){
            displayValue.textContent = "";
            firstNumber="";
            secondNumber="";
            value.firstNumber=firstNumber;
            value.secondNumber=secondNumber;
            value.Operator="";
        }
        else if (button.id==="backspace"){
            if (value.firstNumber!=="" && value.secondNumber==="" && value.Operator===""){
                firstNumber = firstNumber.toString().slice(0,-1);
                value.firstNumber = value.firstNumber.slice(0,-1);
            }
            else if (value.firstNumber !=="" && value.secondNumber==="" && value.Operator!==""){
                value.Operator = value.Operator.slice(0,-1);
            }
            else if (value.firstNumber !=="" && value.firstNumber!=="" && value.Operator!==""){
                secondNumber = secondNumber.toString().slice(0,-1);
                value.secondNumber = value.secondNumber.slice(0,-1);
            }
            displayValue.textContent = displayValue.textContent
            .toString()
            .slice(0, -1)
        }

    })
})