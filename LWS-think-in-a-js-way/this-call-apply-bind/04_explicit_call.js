// node LWS-think-in-a-js-way/this-call-apply-bind/04_explicit_call.js



// 'printPlayerName' func ta 'sakib' obj er baire ase
// ekhn 'explicit binding' er maddhome amra ei function takey access korbo 'sakib' obj diye


var printPlayerName = function () {
    console.log(this.name);
}


var sakib = {
    name: 'Sakib',
    age: 35,
}


printPlayerName.call(sakib);


// explicit binding korar jonno amra 'call()' function takey use kortesi
// 'call' param hishebe ekta obj nei
// 'call' er 1st param 'sakib' korar karone 'printPlayerName' er 'this' keyword ta 'sakib' namok obj k bujhabe