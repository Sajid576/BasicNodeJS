// node LWS-think-in-a-js-way/this-call-apply-bind/02_implicit.js

// implicit binding - 2

var printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    }
};

var sakib = {
    name: 'Sakib',
    age: 35,
}


var tamim = {
    name: 'Tamim',
    age: 36,
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);


sakib.printPlayerName();
tamim.printPlayerName();