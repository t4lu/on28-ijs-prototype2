class Driver {
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
}

module.exports = { Driver }