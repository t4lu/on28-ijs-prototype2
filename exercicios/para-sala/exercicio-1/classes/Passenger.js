import { Driver } from './Driver.js';
export class Passenger {
    name;
    age;
    password;
    amountSpent = 0;

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    requestDrive(driver, amount, password) {
        if (password != this.password) {
            console.log('Senha inválida!')
            return; //encerra o programa, logo após o erro
        }

        if (!(driver instanceof Driver)) { //negação -> se driver não for uma instância da classe Driver, deverá executar o cenário de erro.
            console.log('O parâmetro Motorista é inválido.');
            return;
        }

        this.amountSpent -= amount;
        driver.runDrive(amount);
    }
}
