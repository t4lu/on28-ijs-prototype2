import { Bank } from './Bank.js'
export class Client {
    name;
    #cpf;
    banks = [];

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }

    hasAccountInThisBank(bank) {
        return (
            this.banks.find((element) =>
                element.bankCode === bank.BankCode) !== undefined
        );
    }

    addBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`Informe um banco válido.`);
            return;
        }

        if (this.hasAccountInThisBank(bank)) {
            console.log(`Cliente já possui conta no banco ${bank.bankName}.`);
            return
        }
        this.banks.push(bank);
        let bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);

        Bank.createdBanks[bankIndex].qtdClients++;
        console.log(`${this.name} criou conta no banco ${bank.bankName}.`);
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`Informe um banco válido.`)
        }

        if (!this.hasAccountInThisBank(bank)) {
            console.log(`Não é possível remover. Cliente não tem conta no banco ${bank.bankName}.`)
            return;
        }
        this.banks = this.banks.filter(
            (element) => element.bankCode !== bank.bankCode
        );
        let bankIndex = Bank.createdBanks.findIndex(
            (element) => element.bankCode === bank.bankCode
        );
        Bank.bank[bankIndex].qtdClients--;

        console.log(`Banco ${bank.bankCode} removido da lista.`);
    }
}
export const client1 = new Client('Maria', 123456789);
export const client2 = new Client('Sandra', 987654321);
/*
const oneClient = new Client("talu", 12345678900)

console.log(oneClient)
console.log(oneClient.banks) //[]
//console.log(Client.#cpf) //não está funcionando*/