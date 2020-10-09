class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hi';
	}
}

class Female extends User {
	sayHi() {
		return 'Bye';
	}
}

const Man = new User('someone', '123@ex.ru', '1234');
console.log(Man);

const Anya = new Female('Anya', '123@ex.ru', '1234');
console.log(Anya);
