// node LWS-think-in-a-js-way/Prototype/8_constructor_class.js


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    play() {
        console.log(`${this.name} is playing.`);
    }

}


const sakib = new Person('Sakib', 35);
sakib.play();
