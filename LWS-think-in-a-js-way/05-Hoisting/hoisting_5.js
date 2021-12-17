// node LWS-think-in-a-js-way/Hoisting/hoisting_5.js 

// 22 min 25 sec

// guess the output 

myFunc();

function myFunc() {
    language = 'JavaScript';
    var language;
    console.log(language);
}


// output: JavaScript 