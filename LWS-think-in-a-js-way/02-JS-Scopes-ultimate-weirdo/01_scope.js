/*
'scope' bolte bujhai 'duniya'. 


amader js ultimate parent holo 'window object' ba 'global object'. 
etar under-a amader shob kisu thake

'myFunc' holo 'global object' er child.
'x' variable ta global object er variable.
'y' variable ta 'myFunc' er variable


'parent' tar 'child' k shob kisu diye rakhse.
mane child, taar parent er jinish pati access,modify korte parbe.
kintu 'child' er jinish er upor parent er kono right nai.


e jonnoi 'myFunc' er scope thike 'x' k access korte partesi.
kintu global scope thike 'y' k access korte partesi na. 
ejonnoi global scope a lekha 'console.log(`y=${y}`);' error throw kore.

*/

var x = 10;

function myFunc() {
    var y = 20;
    console.log(`y=${y} from myFunc()`);
    console.log(`x=${x} from myFunc()`);
}

myFunc();

console.log(`x=${x}`);
// console.log(`y=${y}`);
