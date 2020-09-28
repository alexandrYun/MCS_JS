console.log('You are at ' + window.location);

function sayHi() {
	return 'Hi';
}

document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Hi, '+ name;
}

console.log(sayName('Alexandr'));