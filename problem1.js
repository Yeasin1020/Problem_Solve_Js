let today = new Date();

let dayGet = today.getDay();

let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = dayArray[dayGet];
console.log("Today is :", day + '.');

let seconds = today.getSeconds();
let minute = today.getMinutes();
let hours = today.getHours();


let prepend = (hours >= 12) ? "PM" : "AM";
let hour = (hours >= 12) ? hours - 12 : hours;
console.log("Current time is:", hour,prepend, ":", minute, ":", seconds);