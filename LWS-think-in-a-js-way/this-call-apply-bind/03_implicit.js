// node LWS-think-in-a-js-way/this-call-apply-bind/03_implicit.js


// implicit binding - 3

// Person -> ekta object return kore
var Person = function (name, age) {
    return {
        name: name,
        age: age,

        printName: function () {
            console.log(this.name);
        },

        father: {
            name: 'Mr. XYZ',
            printName: function () {
                console.log(this.name);
            }
        }
    }
}

var sakib = Person('Sakib', 35);

sakib.printName();
sakib.father.printName();
