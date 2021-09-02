//  10.closures_4.js
console.log('10.closures_4.js');


/*
Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an 'enclosing scope').
In other words, these functions 'remember' the environment in which they were created.

- Mozilla Documentation (2016)
*/

// 'enclosing scope' - bolte ki bujhai ?? sheta janbo ebar


// ------------------------------------------------------------------
// nicher code ta eikhane open vabe ase
// eikhane num1,num2 -> global scope a thakbe



// //var num1 = 2;
// //var num2 = 3;

// let num1 = 2;
//  let num2 = 3;

// //  var -> global scope
// // let -> script  scope 


// var sum = function () {

//     return function () {
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);





// ------------------------------------------------------------------
// enclosing scope
// num1,num2 -> closure scope a thakbe


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
 
