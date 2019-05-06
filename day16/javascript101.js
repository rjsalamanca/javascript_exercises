// JavaScript 101 Exercises


//Hello, you!
//Hello, you! Part 2
function hello(name) {
  if(name == undefined){
    name = 'world';
  }
  console.log(`Hello, ${name}`)
}

//MADLIB

hello('Mustache');
hello();


function madlib(name,subject){
  return `${name}\'s favorite subject in school is ${subject}`;
}

console.log(madlib('rj','art'));

//Tip Calculator

function tipAmount(amount,service){
   //Tip Calculator 1
   //return service == 'good' ? amount *.2 : service == 'fair' ? amount *.15 : service == 'fair' ? amount *.1 : 'SET PROPER SERVICE'   

   //Tip Calculator 2
   return service == 'good' ? amount *1.2 : service == 'fair' ? amount *1.15 : service == 'fair' ? amount *1.1 : 'SET PROPER SERVICE'; 
}

console.log(tipAmount(100,'good'));
console.log(tipAmount(40,'fair'));

//Tip Calculator 3

function splitAmount(amount,service,split){

   return service == 'good' ? (amount *1.2)/split : service == 'fair' ? (amount * 1.15)/split : service == 'fair' ? (amount *1.1)/split : 'SET PROPER SERVICE';
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));