'use strict';
console.log('Here\'s a hidden message');

let today = new Date(); //declare new object
let formatDate = today.toDateString(); //transform the date format, no time/timezone
let selectElement = document.getElementById('date'); //retrieve element
selectElement.innerHTML= formatDate; //insert string inside element