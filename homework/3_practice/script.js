let body = document.querySelector('body');
body.style.backgroundColor = '#696969';

let page = document.querySelector('.page');
page.style.backgroundColor = 'ghostwhite';

let name = document.querySelector('.name');
name.innerHTML = 'DJ Rashad';

let img = document.querySelector('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DJ_Rashad_2013.jpg/1200px-DJ_Rashad_2013.jpg');

let bio = document.querySelector('.short-bio');
bio.className += ' animated';