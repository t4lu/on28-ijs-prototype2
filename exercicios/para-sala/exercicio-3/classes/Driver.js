export class Driver {
	name;
	age;
	numberOfRides = 0;
	#amountEarned = 0; //declara como um atributo privado.

	static drivers = [];

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
		this.constructor.drivers.push({ name: name, age: age });
	}

	/* quando o método é criado com espaço (ou seja, nao faz parte do nome do metodo -- getUsers --),
	ele NÃO pode receber parâmetros; sua função unica é fazer o RETORNO de parametros (nesse caso, o amountEarned)

	*/
	get amountEarned() {
		return this.#amountEarned;
	}
	/* no caso do set, ele obrigatoriamente precisa do parâmetro, e deve ser ÚNICO.
	sua função é, justamente, modificar o atributo. (nesse caso, atualizar o newAmountEarned)
	
	para os dois casos (get e set) o mais adequado é que o metodo receba o mesmo nome do atributo que irá coletar(get) ou alterar (set).
	*/
	set amountEarned(newAmountEarned) {
		this.#amountEarned = newAmountEarned;
	}

	runDrive(amount) {
		this.#amountEarned += amount;
		this.numberOfRides++;
	}

	static numberOfDrivers() {
		console.log(`O total de motoristas cadastradas é: ${this.drivers.length}`);
	}

	static ageAverage() {
		const totalOfDrivers = this.drivers.length;

		if (totalOfDrivers === 0) return;

		const ageSum = this.drivers.reduce((total, next) => total + next.age, 0);
		const ageAverage = (ageSum / totalOfDrivers).toFixed(2);
		console.log(`A média de idade das motoristas é de: ${ageAverage}`);
	}
}
