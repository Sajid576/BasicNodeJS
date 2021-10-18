// node LWS-think-in-a-js-way/Hoisting/hoisting_6.js 

// 26 min 28 sec
// guess the output 

// const myFunc;

myFunc();

const myFunc = function () {
    let language = 'JavaScript';
    console.log(language);
}


// output: Error


// function ta ebar amra different vabe likhsi... er jonno error dilo, karon:


/*
ebar function ta 'myFunc' namok variable er moddhe ase. 
So hoisting er niyom onujai eta ekdom shurute chole jabe. 
ebong line-6 er moto ekta bepar hobe. 
line-6 a myFunc initialize hoy nai, kebol declare kora hoise. 
r erporei amra myFunc() k call disi. 
tai 'ReferenceError: Cannot access 'myFunc' before initialization' throw korse.
*/


/*
myFunc er data-type 'const' na hoye 'var' holeo error throw korto. 
kintu tokhn 'TypeError: myFunc is not a function' dhoroner error thow korto. 
er karon holo... 
var' er jonno jokhn hoisting hoy,
tokhn line-6 hoto erokom : 'var myFunc = undefine;'
*/


/*
ei part a eshe amra dekhlam...
normal function likhle hoisting ekrokom vabe kaaj kore,
r function k variable er moddhe rakhle hoisting differently kaaj kore.
*/