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
    //lastInput = input.innerHTML != '' ? input.innerHTML[input.innerHTML.length-1] : '';

    if( (lastInput.match(regex) != null) && (addInput.match(regex) != null) ){
        if(lastInput != addInput){
            let changeOperator = input.innerHTML.split('')
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
        lastInput = input.innerHTML != '' ? input.innerHTML[input.innerHTML.length-1] : '';
        console.log(lastInput)
        if(resultDisplayed === false){
            addInput(num.innerHTML)
        } else if ((resultDisplayed === true) && (lastInput == '+' || lastInput == '-' || lastInput == '*' || lastInput == '/')){
            console.log('NO')
            resultDisplayed = false;
        } else{
            resultDisplayed = false;
            input.innerHTML = "";
            addInput(num.innerHTML)
        }
    });
})

// adding click handlers to the operation buttons
operator.forEach(op=>{
    op.addEventListener('click',function(){
        addInput(op.innerHTML)
    });
})

// on click of 'equal' button
result.addEventListener('click',function(){
    let getNumbers = input.innerHTML.split(regex).map(curr=>parseInt(curr));
    let getOperators = input.innerHTML.split(/[0-9]/g).filter(curr=>curr != '');

    // Look for multiplication

    // Look for division

    // Look for addition & subtraction
    resultDisplayed = true;
    console.log(getNumbers)
    console.log(getOperators)
})

// clearing the input on press of clear
clear.addEventListener('click',function(){
    input.innerHTML = '';
})
