import { Bank } from './Bank.js';
import { Client } from './Client.js';

export class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance = 0;

    constructor(client, bank, accountNumber, agencyNumber) {
        if (!(client instanceof Client)) {
            return new Error('Informe um cliente válido');
        }
        if (!(bank instanceof Bank)) {
            return new Error('Informe um banco válido');
        }
        if (
            client.banks.find((element) => element.bankCode === bank.bankCode) ===
            undefined
        ) {
            return new Error(
                `Cliente do CPF ${client.cpf} não possui conta no banco ${bank.bankName}`
            )
        }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
    }

    get balance() {
        return this.#balance;
    }

    credit(amount) {
        let newBalance = this.#balance += amount;
        console.log(`Saldo disponível de débito e crédito: R$${newBalance}`);
    }
    debit(amount) {
        let newBalance = this.#balance -= amount;
        if (amount < 0) {
            console.log(`Saldo indisponível.`);
        } else {
            console.log(`Você gastou R$${amount} no débito. Saldo disponível: R$${newBalance}`);
        }
    }
    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof BankAccount)) {
            console.log("Conta inválida.")
            return
        }

        let moneyToTransfer = amount;
        if (anotherAccount.bank.bankCode !== this.bank.bankCode) {
            moneyToTransfer = amount + amount * this.bank.transferTax;
            console.log(`Transferência efetuada com taxa de ${this.bank.transferTax * 100}% sobre o valor. Saldo disponível R$${amount}`);
        }

        if (this.#balance >= moneyToTransfer) {
            this.debit(amount);
            anotherAccount.credit(amount);
            console.log(`Transferência realizada com sucesso. Saldo atual: R$${this.#balance}`)
            console.log(`Saldo atual da conta destino: R$${anotherAccount.#balance}`)
        } else {
            console.log(`Saldo insuficiente para transferência. Você tem R$${this.#balance} disponível(is).`);
        }
    }

    closeAccount() {
        if (this.#balance === 0) {
            console.log(`Encerrando conta de ${this.client.name} no banco ${this.bank.bankName}.`);
            this.client = undefined;
            this.accountNumber = undefined;
            this.agencyNumber = undefined;
            this.bank = undefined;
            console.log(`Conta encerrada.`)
        } else {
            console.log(`Não foi possível encerrar a conta. Saldo disponível: R$${this.#balance}`)
        }
    }
}

// const bankAccount1 = new BankAccount("talu", 222, 1212, 1234);
// const bankAccount2 = new BankAccount("talita", 333, 1331, 4321);
// const client = new Client ("talu", 12345678900)

// console.log(client)
// client.addBank("teste")
// console.log(client)
// console.log(bankAccount1);
// bankAccount1.credit(250);
// bankAccount1.debit(50);
// //bankAccount1.transferTo('account',50);
// bankAccount1.transferTo(bankAccount2, 1000);
// bankAccount1.transferTo(bankAccount2, 100);
// bankAccount2.closeAccount();
// bankAccount2.debit(100);
// bankAccount2.closeAccount();