// node LWS-think-in-a-js-way/this-call-apply-bind/01.js

// 'this' keyword ta kokhn kake point kore 
// sheta bujhat try korbo ei tutorial a

/**
 * 4 ta rule:
    implicit binding 
    explicit binding
    new binding
    window binding
*/



// implicit binding - 1

var sakib = {
    name: 'Sakib',
    age: 35,

    printPlayerName: function () {
        console.log(this.name);
    }
}

sakib.printPlayerName();