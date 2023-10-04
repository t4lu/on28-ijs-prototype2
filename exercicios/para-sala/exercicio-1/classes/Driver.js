/* a "chamada" do export substitui a necessidade de utilizar o module.exports
bem como a importação com "const > require".

essa configuração é feita no arquivo package.json, inserindo "type": "module" manualmente;
ou com o comando npm init -y,que vai iniciar todas as configurações padronizadas do projeto.

obs.: caso nao tenha esssa alteração, o module.exports é o padrao "implícito".

-> Boas práticas: sempre que uma classe importar a outra, é importante utilizar as chaves, para evitar ser renomeada:

import {Driver} from './classes/Driver.js' (certo!)
import Motorista from './classes/Driver.js' (errado!) */
export class Driver {
    //aqui, fora do construtor, declaro os atributos da classe.
    name;
    age;
    numberOfRides = 0;
    amountEarned = 0;

    constructor(name, age) {
        if (age >= 18) {
            this.name = name;
            this.age = age;
        } else {
            throw `Você precisa ser maior de 18 anos para ser motorista.`
        }
    }

    runDrive(amount) {
        this.numberOfRides++;
        this.amountEarned += amount;
    }
}
/*
class Person {}

//verifica se o objeto driver1 é uma instancia da classe driver (retorna um valor booleano).
const driver1 = new Driver ("talu", 26)
console.log(driver1 instanceof Driver)
console.log(driver1 instanceof Person)*/