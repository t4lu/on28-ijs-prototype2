class Passenger {
    name;
    age;
    password;
    amountSpent = 0;

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
}

module.exports = { Passenger }