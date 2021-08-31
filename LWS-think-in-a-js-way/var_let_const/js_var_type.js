
/**
 * 'var' is function scope .It can be defined again.
 * 
 * 'let' is block scope(function/if/else).It cant be defined again but value can be changed.
 * 
 * 'const' var same as 'let'  and also cant be redefined , value can't be changed.
 * 
 * 
 *   
 * 'var' type allows to access variable from global space that can create ambiguity when other library function has the same variable name  .So, 'let' has come in ES6 to solve the problem.'let' variable doesn't allow access variables from outside block. 
 * 
 */



if(true){
    var x='var type';
    x= 'var type changed';  // will work
    var x='var type redefined';  // will work
}
console.log(x);  //will work
if(true){
    let y='let type';
     y='let type changed';  // will work
    let y='let type redefined';   // thorws error
    console.log(y);  // will work
}
console.log(y); //throw error as y is not defined.

if (true){
    const z="this is const";
    z="lol"  // throws error
    const z="this is const again"; //throws error
    console.log(z);  // will work
}
console.log(z);  // throws error

