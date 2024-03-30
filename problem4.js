let ab = 5;
let bc = 6;
let ca = 7;

let s = (ab + bc + ca)/2;

let  areaTriangle = Math.sqrt((s * (s - ab)) * (s * (s - bc)) * (s * (s - ca)));
console.log("Area triangle is: "+areaTriangle);
