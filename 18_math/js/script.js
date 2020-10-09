console.log('You are at ' + window.location);

function moduleSquare(num) {
	return Math.abs(num) / 2;
};

console.log(moduleSquare(-3));

console.log(Math.floor(2.456));
console.log(Math.round(2.6));

console.log(Math.random());

console.log(Math.random() * (10 - 5) + 5);

console.log(Math.floor(Math.random() * (10 - 5) + 5));

function practice(num1) {
	let num2 = num1 ** (Math.random() * (9 - 1) + 1);
	console.log(num2);

	console.log(Math.round(num2));
}

practice(4);
