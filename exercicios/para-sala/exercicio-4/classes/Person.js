// Praticando conceitos de herança.

export class Person {
    name;
    age;
    #amount = 0; //propriedade privada da classe Person
    // profile;

    constructor(name, age, profile) { //esses são os atributos que serão herdados
        this.name = name;
        this.age = age;
        //this.profile = profile;
    }

    get amount() { //geralmente, esses métodos recebem o mesmo nome do atributo privado
        return this.#amount;
    }

    set amount(newAmount) {
        this.#amount = newAmount;
    }

    static numberOfPeople(people) {
        return people.length;
        //  console.log(`O total de ${profile} cadastradas é: ${this.profile.length}`) //ficou complexo, resolver depois kkk
    }

    static ageAverage(people){
        totalOfPeople = people.length;

        if(totalOfPeople === 0) return 0 //se a média for igual a zero, o programa retorna zero e nao executa mais nada.

        const ageSum = people.reduce((total, people) => total + people.age, 0);
        const ageAverage = (ageSum / totalOfPeople).toFixed(2);
        
        return ageAverage //a mensagem será retornada na classe em que for utilizada.
    }
}