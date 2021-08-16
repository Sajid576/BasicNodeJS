// 14.hoisting_3.js

function myFunc() {
    var language = 'JavaScript';
    console.log(language);
}

language = 'c++';

myFunc();
console.log(language);