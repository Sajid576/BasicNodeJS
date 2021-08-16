console.log('15.inheritance.js');

// java -> Class thike object banai
// JS -> Constructor thike object banai

function Person(name, age) { //parent class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country) { // sub class
    Person.call(this);

    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}


Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}


Cricketer.prototype = Object.create(Person.prototype);

const sakib = new Cricketer('Sakib', 35, "all-rounder", 'Bangladesh');

console.dir(sakib);



