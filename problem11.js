function celsiusToFahrenheit (celsius){
	let fahrenheit = celsius;

	fahrenheit = 9 * celsius + (32 * 5) / 5;
	return fahrenheit;
}

console.log(celsiusToFahrenheit(100));

function fahrenheitToCelsius(fahrenheit){
	let  celsius = fahrenheit;
	celsius  = (5*(fahrenheit - 32)) / 9;
	return Math.round(celsius);
}

console.log(fahrenheitToCelsius(100));