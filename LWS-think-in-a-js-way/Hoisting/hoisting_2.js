// node LWS-think-in-a-js-way/Hoisting/hoisting_2.js 
// vid -> 13 min 20 sec

var LANGUAGE = 'Jave';
var language = 'JavaScript';

function getLanguage() {

    // 'if' er vitorer 'var' takey JS hoisting kore ei func er shurute ene dei, just like this:
    // var language = undefine;


    if (!language) {
        var language = LANGUAGE;

    }
    return language;
}

console.log(`I love ${getLanguage()}`);

// 20 nmbr line 'I love Jave' print korbe
// eta 'var' er ekta unpredictable behaviour 
// normal programming language hole erokom khetre 'I love JavaScript' print hoto


// eta howar karon:
// 'var' holo function scope,
// shejonno var, 'if' block er moddhe thakleo sheta hoisting kore function er shurute chole jai, ebong bepar ta line-10 er moto hoy. shejonno 'I love Jave' print hoise



