// node LWS-think-in-a-js-way/this-call-apply-bind/05_explicit_call.js


var printPlayerName = function (c1, c2, c3) {
    console.log(`${this.name} is ${c1}, ${c2} and ${c3}`);
}


var sakib = {
    name: 'Sakib',
    age: 35,
}


var v1 = 'Handsome';
var v2 = 'All-rounder';
var v3 = 'Best Player';
// amra chacchi er v1,v2,v3 variables gula jeno 'printPlayerName' dara accessible hoy
// eta korar jonno ei variables gula 'call' er parameter hishebe pass kore dibo


printPlayerName.call(sakib, v1, v2, v3);