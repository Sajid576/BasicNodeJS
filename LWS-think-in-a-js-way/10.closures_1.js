//  10.closures_1.js
console.log('10.closures_1.js');


var num1 = 2;
var num2 = 3;

var sum = function () {
    return num1 + num2;
}

console.log(sum(num1, num2));

// global func er moddhe 'sum' ase
// so sum -> 'child' and global-> 'parent'
// child can access any property of it's parent
// that's why sum func can access 'num1' and 'num2'
// but parent doesn't have any access of its child's property

//-----------------------------------------

console.dir(sum); // dir -> obj er prottek ta property k show korai
// closure -> nijer duniya baadeo parent er duniyay ja ja use hoise, shetake nijer shathe carry korbe