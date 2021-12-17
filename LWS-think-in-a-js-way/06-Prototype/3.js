// node LWS-think-in-a-js-way/Prototype/3.js


// shared methods gula k niye alada ekta obj banabo
// shei obj er reference use korbo
// reference use korle notun object create hobe na
// but still shobai use korte parbe


const personMethods = {
    eat() {
        console.log('Person is eating.');
    },

    sleep() {
        console.log('Person is sleeping.');
    }

    // add new method
}

function Person(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;

    // add new reference

    return person;
}


const sakib = Person('Sakib', 35);
const tamim = Person('Tamim', 36);

sakib.eat();

// still ekta problem roye gese
// 'personMethods' a jodi amra new method add korte chai
// 'Person' a eshe abar oi new method er jonno new ref add kora lagbe
// ei jhamela thike ber howar jonno
// amra JS er ekta feature use korbo... shetar naam 'Object.create()'

// nxt file a eta niye alochona korsi
