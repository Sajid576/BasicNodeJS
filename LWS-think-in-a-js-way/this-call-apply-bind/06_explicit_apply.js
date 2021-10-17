// node LWS-think-in-a-js-way/this-call-apply-bind/06_explicit_apply.js


// 'call' ekta ekta kore parameter niye thake
// 'apply' same kaaj tai kore
// kintu eta ekta 'array' accept kore 

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

var v = [v1, v2, v3];

printPlayerName.apply(sakib, v);