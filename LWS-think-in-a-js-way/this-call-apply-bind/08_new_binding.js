// node LWS-think-in-a-js-way/this-call-apply-bind/08_new_binding.js

// new binding

// amr kase eitake onno language er 
// CLASS er OBJECT create korar moto lagtese

function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(`${name} is ${age} years old.`);
}

var sakib = new Person('Sakib', 35);