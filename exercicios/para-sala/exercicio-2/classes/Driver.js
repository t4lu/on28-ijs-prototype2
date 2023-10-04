export class Driver {
	name;
	age;
	numberOfRides = 0;
	amountEarned = 0;
	static drivers = [];
	/*
	atributos estáticos NÃO pertencem aos objetos, mas sim, à classe. seu uso está condicionado a cenários em que se faz
	necessário definir atributos exclusivos para a Classe, e não suas instâncias.
	para chamar:
	console.log(Driver.drivers) (certo!)

	console.log(driver1.drivers) (errado! -> o objeto não tem acesso!!)
	*/

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
		//this.construtor.drivers.push();//tanto essa quanto a implementação abaixo, funcionam da mesma forma.
		Driver.drivers.push({ name, age });
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}
	/* assim como os atributos, os métodos estáticos pertencem APENAS à classe. */
	static numberOfDrivers() {
		console.log(`Existem ${Driver.drivers.length} motoristas cadastradas.`)
	}

	static ageAverage() {
		const totalOfDrivers = Driver.drivers.length;
		if (totalOfDrivers === 0) return;

		const sumOfAges = Driver.drivers.reduce((total, driver) => total + driver.age, 0);
		const ageAverage = (sumOfAges / totalOfDrivers).toFixed(2);
		console.log(`A média de idade das motoristas é ${ageAverage} ano(s).`)
	}
}