//  10.closures_2.js
console.log('10.closures_2.js');


var num1 = 2;
var num2 = 3;


var sum = function () {
    // var num2 = 3;
    var num3 = 5;
    return function () {
        return num1 + num2;
    }
}

var myFunc = sum();

console.dir(myFunc);
var mul = function () {
    
    var num3 = 5;
    return function () {
        return num1 * num3;
    }
}

var myFunc = mul();

console.dir(myFunc);

// 'num2' -> global hole -> global scope
// 'num2' -> global na, but bairer (outer) func -> closure scope

// num3 -> myFunc() er 'closure' a thakbe na
// karon inner func (myFunc) a num3 use hoy nai
// JS smart, er jonno jeta jeta use hoy nai
// shegula k khamakha 'closure' a ane naa

//ekta func k taar duniyar baire 
//kintu global func er moddhe nai,
// emn kisu k access korte hole
// oi func taar closure use kore


// j property 'global' a thakbe...
// sheta 'closure' a thakbe na [thakar dorkar-o to naai :v ]