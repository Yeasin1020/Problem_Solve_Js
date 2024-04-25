//Spread and Rest Operator in ES6
const myArray = [1, 2, 3];
const myArray2 = [...myArray, 4, 5, 6];

myArray.push(4, 3);
myArray.pop()
myArray.shift();
myArray.unshift(10);
console.log(myArray);


const myArray3 = [...myArray, ...myArray2];

console.log(myArray3);

let sum = 0;
myArray3.forEach(function(item) {
	sum += item;
	
});
console.log(sum);

let sum2 = 0;
const myArray4 = (...rest) => {

	console.log(rest);
	rest.forEach(function(item) {
		sum2 += item;
		
	});
	console.log(sum2);
}

myArray4(1,2,3,4,5,6,7,8,9,10);

