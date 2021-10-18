//  vid -> 29 min 55 sec
console.log('closures_4_2.js');

// ques-1 -> guess the n1,n2 values inside of the closures.

(function () {
    var n1 = 2;
    var n2 = 5;

    var sum = function () {
        return n1+n2;
    }

    console.log('sum before:', sum());
    console.dir(sum);

    n1 = 9;
    n2 = 6;

    console.log('sum after:',sum());
    console.dir(sum);
})()

// the reason is -> 'closure' variable er 'reference' dhore rakhe
// exact value k save kore rakhe na.

// ---------------------------------------------------------------------

// ques 2 -> line 38 a kno closure nai bujhso? 
// vid 34 min 10 sec

let a = 11;
let b = 16;

var readyForTheShock = function () {
    return a+b;
}

console.dir(readyForTheShock);