let button = document.querySelector('.button');

function haveEnough() {
	let totalCash = +prompt('money?');
	let watchesCount = +prompt('watches?');
	let earringsCount = +prompt('earrings?');
	let watchesSum = +prompt('watches sum?') * watchesCount;
	let earringsSum = +prompt('earrings sum?') * earringsCount;
	if(watchesSum + earringsSum <= totalCash) {
		alert('Enough $$$');
	} else {
		alert('Not enough $$$');
	}
}

haveEnough();

button.onclick = () => {
	haveEnough();
}

