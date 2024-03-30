let today = new Date();

let dayGet = today.getDay();

let allDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday"];

let day = allDay[dayGet];
console.log(day);

let months = today.getMonth();
let month = (months < 10) ? `0${months + 1}` : `${months}`; // The '+1' is because the count for January starts at zero,
let year = today.getFullYear();

console.log(`${month}:${day}:${year}\n${day}:${month}:${year}`);