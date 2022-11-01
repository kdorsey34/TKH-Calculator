function add(num1, num2){
return num1 + num2
}
 
function subtract(num1, num2){
return num1 - num2
}

function multiply(num1, num2){
return num1 * num2
}

function divide(num1, num2){
return num1 / num2
}

function operate(num1, num2, operator){

    if(operator.toLowerCase() === 'add'){
        return add(num1, num2)
    }
    else if(operator.toLowerCase() === 'subtract'){
        return subtract(num1, num2)
    }
    else if(operator === 'multiply'){
        return multiply(num1, num2)
    }
    else if(operator === 'divide'){
        return divide(num1, num2)
    }
else {
    return 'error operator not recognized'
    }
 }
//variables to hold values from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''
//function that runs when the equals button is clicked using onclick
function equalsClicked(){
    //saving the number value of the first input to num1
    num1 = document.querySelector('#num1').value
    num2 = document.querySelector('#num2').value
    //parseInt changes num1 data type to number

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    operatorButtonVal = document.querySelector('#operator').value
    
    //next steps
    const results = document.getElementById('result-num')

    const numResult = operate(num1, num2, operatorButtonVal)

    results.textContent = numResult
    
    
}