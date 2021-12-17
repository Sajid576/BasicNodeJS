// node LWS-think-in-a-js-way/Prototype/2.js


// amader jodi ohoroho onke obj create korte hoy tahole pura bpr takey ekta func er moddhe niye ashte pari
// ei function ta ekta obj create kore, return korbe


function Person(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = function () {
        console.log('Person is eating.');
        // console.log(`${person.name} is eating.`);
    }

    person.sleep = function () {
        console.log('Person is sleeping.');
        // console.log(`${person.name} is sleeping.`);
    }

    return person;
}


const sakib = Person('Sakib', 35);
const tamim = Person('Tamim', 36);

sakib.eat();
tamim.eat();


// evabe object banate thakle shomossha ki?
// ekhane 2 ta obj create korsi bole eta kono big deal na.
// kintu larger application er khetre
// erokom kore object banate thakle, sheta performance a effect falabe

// eta thike bachar jonno amra jeta korbo...
// jeshob method gulo share kora jai 
// shegula k alada ekta object er vitore niye ashbo
// next file a sheta dekhano hoise
