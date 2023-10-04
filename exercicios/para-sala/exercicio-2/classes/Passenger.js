export class Passenger {
	name;
	age;
	password;
	amountSpent = 0;
	static passengers = []

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
		Passenger.passengers.push();
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amountSpent -= amount;
		driver.runDrive(amount);
	}
	static numberOfPassengers() {
		console.log(`Existem ${Passenger.passengers.push()} passageiras cadastradas.`)
	}

	static ageAverage() {
		const totalOfPassengers = Passenger.passengers.length;
		if (totalOfPassengers === 0) return;

		const sumOfAges = Passenger.passengers.reduce((total, passenger) => total + passenger.age, 0);
		const ageAverage = (sumOfAges / totalOfPassengers).toFixed(2);
		console.log(`A média de idade das passageiras é ${ageAverage} ano(s).`)
	}
}