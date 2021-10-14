// node LWS-think-in-a-js-way/Hoisting/hoisting_1.js 


// 'hoisting' mane upre niye asha 

// 'var' declaration k (not assigning) upre niye jaai
// ebong eki shathe oi var a 'undefine' assign kore dei


// 'let' er khetreo hoisting hoy
// kintu 'var' er jmn eki shathe 'undefine' ta assign kore dei
// let er khetre sheta hoy na
// ejonno 'let' er khetre ERROR throw kore



console.log(a);
var a = 'Saif';
// let a = 'Fardin';

console.log(a);
// line-19 k uncomment kore code run dile error throw korbe


/* ATTENTION */
let b;
console.log(b)
// ei khetre 'b' ke amra kebol define korsi, kono value assign kori nai...
// but still kono error throw kortese na, karon eibar kono hoisting hoy nai...
// normally programmer kono let type er variable k shudhu 'declare' kore thakle 
// JS nijei oitar value 'undefine' assign kore dei
// it has nothing to do with hoisting, eta basic js


// 'let' is predictable, karon normally onnanno programming language er khetreo
//  amra kono variable k age thike 'declare' na korei jodi use korte chai...
//  tahole oita error throw korbe. r etai howa uchit.
