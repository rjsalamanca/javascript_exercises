"use strict";

const square = document.getElementById('square');
const echo = document.getElementById('echo');
const seven = document.getElementById('numberSeven');

function sayHello(name){
  console.log(`Hello ${name}!`);
}

function promptForName(){
  const name = prompt('What is your name?');
  return name;
}

function echoThisText(textToRepeat){
  console.log(textToRepeat);
}

square.addEventListener('click',function(){
  const name = promptForName();
  sayHello(name);
});

echo.addEventListener('click',function(){
  const textToEcho = echo.innerHTML;
  echoThisText(textToEcho);
});

seven.addEventListener('click',function(){
  const value = numberSeven.innerHTML;
  echoThisText(value);
});