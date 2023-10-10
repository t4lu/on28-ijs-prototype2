import { Bank } from './Bank.js'
export class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`O parâmetro é inválido.`)
            return;
        }

        if (this.banks.includes(bank)) {
            console.log(`Cliente já possui conta no banco ${bank}.`);
        } else {
            this.banks.push(bank);
            Bank.qtdClients++;
        }
        let clientName = Bank.createdBanks.find((checkClientName) => checkClientName.bankCode === bank.bankCode);
        clientName.qtdClients++
        console.log(`${this.name} criou conta no banco ${bank}.`)
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`O parâmetro é inválido.`)
        }

        if (!this.banks.includes(bank)) {
            console.log(`Não é possível remover. Cliente não tem conta no banco ${this.banks}.`)
        } else {
            this.banks.splice(bank);
            Bank.qtdClients--;
        }
    }
}
/*
const oneClient = new Client("talu", 12345678900)

console.log(oneClient)
console.log(oneClient.banks) //[]
//console.log(Client.#cpf) //não está funcionando*/