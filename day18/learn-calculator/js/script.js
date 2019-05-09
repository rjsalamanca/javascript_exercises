"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'), // clear button
    regex = /\+|\-|\*|\//g; // Regex operators
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed
let lastInput = '';

// adding click handlers to number buttons
function addInput(addInput){
    lastInput = input.innerHTML == '' ?  '' : input.innerHTML[input.innerHTML.length-1];

    if( (lastInput.match(regex) != null) && (addInput.match(regex) != null) ){
        if(lastInput != addInput){
            let changeOperator = input.innerHTML.split('');
            changeOperator.splice(input.innerHTML.length-1,1,addInput)
            input.innerHTML = changeOperator.join('')
        }
    } else {
        if((lastInput == '') && (addInput.match(regex) != null)){
            console.log('Start with a number!');
        } else {
            input.innerHTML += addInput; 
        }
    }
}

number.forEach(num=>{
    num.addEventListener('click',function(){
        addInput(num.innerHTML);
    });
})

// adding click handlers to the operation buttons
operator.forEach(op=>{
    op.addEventListener('click',function(){
        addInput(op.innerHTML);
    });
})

// on click of 'equal' button
result.addEventListener('click',function(){
    let getNumbers = input.innerHTML.split(regex).map(curr=>Number(curr));
    let getOperators = input.innerHTML.replace(/[0-9]|\./g,'').split('');

    lastInput = input.innerHTML == '' ?  '' : input.innerHTML[input.innerHTML.length-1];

    if(!lastInput.match(regex)){
        // Look for multiplication
        let multiply = getOperators.indexOf('*');
        while(multiply != -1){
            getNumbers.splice(multiply,2, getNumbers[multiply] * getNumbers[multiply +1]);
            getOperators.splice(multiply, 1);
            multiply = getOperators.indexOf('*');
        }

        // Look for division
        let divide = getOperators.indexOf('/');
        while(divide != -1){
            getNumbers.splice(divide,2, getNumbers[divide] / getNumbers[divide +1]);
            getOperators.splice(divide, 1);
            divide = getOperators.indexOf('/');
        }

        // Look for addition & subtraction
        let adddition = getOperators.indexOf('+');
        while(adddition != -1){
            getNumbers.splice(adddition,2, getNumbers[adddition] + getNumbers[adddition +1]);
            getOperators.splice(adddition, 1)
            adddition = getOperators.indexOf('+')
        }

        let subtraction = getOperators.indexOf('-');
        while(subtraction != -1){
            getNumbers.splice(subtraction,2, getNumbers[subtraction] - getNumbers[subtraction +1]);
            getOperators.splice(subtraction, 1);
            subtraction = getOperators.indexOf('-');
        }

        console.log(getNumbers);
        resultDisplayed = true;
        input.innerHTML = getNumbers;
    }
});

// clearing the input on press of clear
clear.addEventListener('click',function(){
    input.innerHTML = '';
})
