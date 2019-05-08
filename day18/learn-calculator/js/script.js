"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
function addInput(num){
    input.innerHTML += num
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

// clearing the input on press of clear
clear.addEventListener('click',function(){
    input.innerHTML = ''
})