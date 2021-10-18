//  closures_2.js
console.log('closures_2.js');


var num1 = 2;
var num2 = 3;


var noClosure = function () {
    var num3 = 5;

    var no = function () {
        return num1 + num2;
    }

    return no;
}

var closureExists = function () {
    var num3 = 5;
    var numClosure = 8

    var yes = function () {
        return num1 + numClosure;
    }

    return yes;
}


console.dir(myFunc);
var funcNo  = noClosure();
var funcYes = closureExists();

console.dir(funcNo);
console.dir(funcYes);


//ekta func k taar duniyar baire 
//kintu global func er moddhe nai,
// emn kisu k access korte hole
// oi func taar closure use kore



// ei xmpl a ekta func arekta func ke return kore.

/** 'funcNo' er moddhe amra closure dekhte pabo na, karon-
 *      'noClosure' func jei inner func k return kore sheta 'funcNo' a assign hoy
 *       inner func a j j variables gula use hoise shegula shob already 'global scope' a ase
 *      global scope a ase bole ekhane 'closure' lage nai
 */


/** 'funcYes' er moddhe amra closure dekhte pabo, karon-
 *      'closureExists' func jei inner func k return kore sheta 'funcYes' a assign hoy
 *       inner func a 'num1' r 'numClosure' namok duita var use hoise
 *       'num1' already 'global scope' a define kora ase, 
 *       kintu 'numClosure' global a nai, abar inner function er moddeo define kora nai
 *      'numClosure' define kora ase inner func er bairer outer func er moddhe .
 *      so ei karone 'numClosure' k closure a rakhse
 */



// num3 -> closureExists() er 'closure' a thakbe na
// karon inner func (funcYes) a num3 use hoy nai
// JS smart, er jonno jeta jeta use hoy nai
// shegula k khamakha 'closure' a ane naa



// j property 'global' a thakbe...
// sheta 'closure' a thakbe na [thakar dorkar-o to naai :v ]