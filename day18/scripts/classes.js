"use strict";

const listItems = document.querySelectorAll('.list-item');


listItems.forEach(function(listItem){
    listItem.addEventListener('click',function(){
        console.log(listItem.innerHTML);        
    });
})
