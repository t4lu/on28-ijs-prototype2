import { Driver } from './Driver.js';
import { Person } from './Person.js';
export class Passenger extends Person { //a classe Passenger 

	#password;

	static passengers = [];

	constructor(name, age, password) {
		super(name, age) // esses atributos estão sendo chamados da classe Person
		this.#password = password;
		this.constructor.passengers.push({ name: name, age: age });
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.#password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amount -= amount;
		driver.runDrive(amount);
	}

	changePassword(oldPassword, newPassword) {
		if (oldPassword === this.#password) {
			this.#password = newPassword;
		} else {
			console.log('A senha antiga não correnponde!');
		}
	}

	static numberOfPassengers() {
		const numberOfPassengers = super.numberOfPeople(Passenger.passengers);
		console.log(`O total de passageiras cadastradas é ${numberOfPassengers}`)
	}

	static ageAverage() {
		const ageAverageReturned = super.ageAverage(Passenger.passengers)
		console.log(`A média de idade das passageiras é: ${ageAverageReturned} anos`)
	}

}