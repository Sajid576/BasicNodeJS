// node LWS-think-in-a-js-way/this-call-apply-bind/09_window_binding.js


// window binding

var printName = function () {
    console.log(this);
    console.log(this.name);
};

var sakib = {
    name: 'Sakib',
    age: 35,
};

// printName.call(sakib);

printName();
// output: undefine

// 'printName' er 'this' ta by default 'window' ba 'global' k point korbe