// node LWS-think-in-a-js-way/Prototype/4_obj_dot_create.js

// etokkhn amra nijera function likhe
// sheta diye obj create kortam
// ekhn amra JS er 'Object.create()' diye obj banano dekhbo

const captain = {
    name: 'Mashrafi',
    age: 38,
    country: 'Bangladesh'
}

const player = Object.create(captain);


console.log(player);
// output: {} 
// output a blank object ashbe


console.log(player.name);
// output: Mashrafi


// eta ekta weird behavior
// "player" k dekhacche blank
// kintu "player.name" likhle thikii naam ta dekhacche


// 'player' blank dekhaleo "player.name" a Mashrafi ashar karon holo:-
// 'Object.create(captain)' use korar karone
// JS jane j "player" hocche child
// "player" er parent hocche "captain"
// JS jokhn "player" er moddhe ekta property khuje pai na
// tokhn she parent er moddhe khuje dekhe oi property ta ase kina
// shejonno 'player.name' er output 'Mashrafi' ashchey


// ei jinishta JS korte pare 'Prototype' er karone