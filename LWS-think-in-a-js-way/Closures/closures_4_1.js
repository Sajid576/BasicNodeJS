//  vid -> 21 min 50 sec
console.log('closures_4_1.js');


/*
Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an 'enclosing scope').
In other words, these functions 'remember' the environment in which they were created.

- Mozilla Documentation (2016)
*/

// global variable gular 'closer' a ashar kono dorkar nai... karon egula k emnitei access korar jacche
// 'enclosing scope' a j variables gula thakbe... tader khetre 'closure' concept na ashe


// 'enclosing scope' - bolte ki bujhai ?? sheta janbo ebar


// ------------------------------------------------------------------
// nicher code ta eikhane open vabe ase
// eikhane num1,num2 -> global scope a thakbe
// tobey num1,num2 er type 'let' hole era tokhn global scope a thake na (-_-)



//  shift+alt+A -> multi line comment shortcut

var num1 = 2;
var num2 = 3;

// let num1 = 2;
// let num2 = 3;

//  var -> global scope
// let -> closure scope


var sum = function () {

    return function () {
        return num1 + num2;
    }
}

var myFunc = sum();

console.dir(myFunc);




// ------------------------------------------------------------------
// enclosing scope
// num1,num2 -> closure scope a thakbe

/*
(function () {

    var num1 = 2;
    var num2 = 3;


    var sum = function () {

        return function() {
            return num1 + num2;
        }
    }

    var myFunc = sum();

    console.dir(myFunc);

})();
*/