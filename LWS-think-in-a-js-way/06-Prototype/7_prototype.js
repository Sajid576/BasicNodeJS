// node LWS-think-in-a-js-way/Prototype/7_prototype.js


// eibar amra '5_obj_dot_create.js' file er limitation ta
// 'prototype' use kore kivabe katai uthte pari sheta dekhbo


function Person(name, age) {
    let p = Object.create(Person.prototype);

    p.name = name;
    p.age = age;

    return p;
}


Person.prototype = {
    eat() {
        console.log('Person is eating.');
    },

    sleep() {
        console.log('Person is sleeping.');
    },

    play() {
        console.log('Person is playing.');
    }
}


const sakib = Person('Sakib', 35);
console.dir(Person);


// 'prototype' er moddhe amra amader shared methods gula k rakhte pari


// ei kaaj takey amra onno language er
// 'inheritance' er shathe compare korte pari

// JS is a 'prototype' based language
// 'class' based language gular inheritance er kaaj ta
// JS taar 'prototype' diye shere fele

// ES6 a JS a 'class' add hoy
// kintu ES6 er age JS inheritance er kaaj 'prototype' diye korto