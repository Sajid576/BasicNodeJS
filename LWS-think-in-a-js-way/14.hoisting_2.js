// 14.hoisting_2.js
let LANGUAGE = 'Jave';
let language = 'JavaScript';

function getLanguage() {

    // 'if' er vitorer var takey JS hoisting kore ei func er shurute ene dei
    // var language = undefine;


    if (!language) {
        var language = LANGUAGE;

    }
    return language;
}

console.log(`I love ${getLanguage()}`);