"use strict";

const square = document.getElementById('square');

function sayHello(){
  alert('Hello World!');
}

square.addEventListener('click',function(){
  sayHello();
});