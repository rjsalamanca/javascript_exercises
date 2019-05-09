"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
function addInput(addInput){
    const lastInput = input.innerHTML != '' ? input.innerHTML[input.innerHTML.length-1] : '';

    if( (lastInput.match(/\+|\-|\×|\÷/g) != null) && (addInput.match(/\+|\-|\×|\÷/g) != null) ){
        if(lastInput != addInput){
            let changeOperator = input.innerHTML.split('')
            changeOperator.splice(input.innerHTML.length-1,1,addInput)
            input.innerHTML = changeOperator.join('')
        }
    } else {
        if((lastInput == '') && (addInput.match(/\+|\-|\×|\÷/g) != null)){
            console.log('No can\'t start with operator!');
        } else {
            input.innerHTML += addInput; 
        }
    }
}

number.forEach(num=>{
    num.addEventListener('click',function(){
        addInput(num.innerHTML)
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
    let getNumbers = input.innerHTML.split(/\+|\-|\×|\÷/g).map(curr=>parseInt(curr));
    let getOperators = input.innerHTML.split(/[0-9]/g).filter(curr=>curr != '');

    // Look for multiplication

    // Look for division

    // Look for addition & subtraction

    console.log(getNumbers)
    console.log(getOperators)
})

// clearing the input on press of clear
clear.addEventListener('click',function(){
    input.innerHTML = '';
})