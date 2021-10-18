// node LWS-think-in-a-js-way/Prototype/5_obj_dot_create.js


const personMethods = {
    eat() {
        console.log('Person is eating.');
    },

    sleep() {
        console.log('Person is sleeping.');
    }
}


function Person(name, age) {
    let person = Object.create(personMethods);

    person.name = name;
    person.age = age;

    return person;
}


// 16 nmbr line a age '{}' chilo
// ebar shekhane amra 'Object.create(personMethods)' likhsi

// eta lekhai jeta hoilo j
// kono property ba methods jodi 'person' obj a na thake 
// tahole JS shegula k 'person' er parent er moddhe khujte jabe


const sakib = Person('Sakib', 35);
sakib.eat();

console.log(sakib)

// age ekta problem chilo j
// notun method add korle dui jaigai chng ana lagto
// ekhn shei problem ta chole gelo, Object.create() use korar karone

// kintu amader ei code takey aro improve korar way ase
// shared methods gula jeno pawa jai
// shetar jonno amader ekta object maintain kora lagtese -> 'personMethods'
// built-in ekta jinish ase jeta diye ei limitations ta katano jai