// node LWS-think-in-a-js-way/this-call-apply-bind/07_explicit_bind.js


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


// 'bind()' onekta 'call()' er motoi kaaj kore
// 'call' function k direct call kore dei
// 'bind' direct call kore na.. borong ekta 'instance' return kore
// amra ei return kora 'instance' k call kore kaaj chalate parbo

var newFunc = printPlayerName.bind(sakib, v1, v2, v3);

newFunc();

// ----------------------------------------
// Summary:
/**
 * object er bairer kono function k jodi amader use korte hoy
 * tokhn amra ei 'call', 'apply', 'bind' er maddhome bairer oi func k use korte parbo.
 */