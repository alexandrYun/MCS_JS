let Users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi: function() {return 'hi'}
}

function User(name, email, password) {
	// конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
}

const Fedya = new User('Федя', 'f@ex.com', 'qwerty');

console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
	// конструктор
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function() {return 'hi, '+ this.name + '!'}
}

const Alla = new FUser('Алла', 'f@ex.com', 'qwerty');
console.log(Alla);
console.log(Alla.sayHi());