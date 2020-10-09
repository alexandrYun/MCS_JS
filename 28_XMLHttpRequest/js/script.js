console.log('You are at ' + window.location);

const APIKey = 'e38f7f4aa4ee8e319fc7d462f6f99fda';
const form = document.querySelector('.form');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');

form.onsubmit = (e) => {
	e.preventDefault();
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid='+APIKey;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if(xhr.status != 200) {
		console.log(xhr.status + ' ' + xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		temperature.innerHTML = DATA.main.temp - 273;
		wind.innerHTML = DATA.wind.speed;
	}
}


// if(xhr.status != 200) {
// 	console.log(xhr.status + ' ' + xhr.statusText);
// } else {
// 	let DATA = JSON.parse(xhr.responseText);
// 	console.log(DATA);
// 	document.write(DATA.main.temp - 273);
// }

