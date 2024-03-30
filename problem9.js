let christmasDay = new Date();
let christmas = new Date(christmasDay.getFullYear(),11,25);

let year = christmasDay.getFullYear();
let month = christmasDay.getMonth();
let  day = christmasDay.getDate();

let leftMonth = 12 - (month+1);
let leftDay = (day < christmas.getDate()) ? christmas.getDate()-day : day - christmas.getDay();
console.log(`LeftMonth:${leftMonth} LeftDay: ${leftDay}`);