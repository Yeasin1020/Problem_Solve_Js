for(let year = 2014; year <= 2054; year++) {
	let day = new Date(year, 0, 0, 6);
	//console.log(day);
	if(day.getDay() == 6) {
		console.log("This year 1st month is a Saturday.", + year);
	}
}