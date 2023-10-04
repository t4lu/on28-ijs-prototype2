import { Person } from './Person.js'

export class Driver extends Person {
	numberOfRides = 0;

	static drivers = [];

	constructor(name, age) {
		super(name, age) // esses atributos estão sendo chamados da classe Person
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}

		this.constructor.drivers.push({ name: name, age: age });
	}

	runDrive(amount) {
		this.amount += amount;
		this.numberOfRides++;
	}

	static numberOfDrivers() {
		const numberOfDrivers = super.numberOfPeople(Driver.drivers);
		console.log(`O total de motoristas cadastradas é: ${numberOfDrivers}`);
	}

	static ageAverage() {
		const ageAverageReturned = super.ageAverage(Driver.drivers)
		console.log(`A média de idade das motoristas é: ${ageAverageReturned} anos`)
	}

	get amountEarned() {
		return this.amount;
	}

	set amountEarned(amount) {
		this.amount = amount;
	}
}
