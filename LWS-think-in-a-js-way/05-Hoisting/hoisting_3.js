// node LWS-think-in-a-js-way/Hoisting/hoisting_3.js 

let LANGUAGE = 'Jave';
let language = 'JavaScript';

function getLanguage() {

    if (!language) {
        let language = LANGUAGE;

    }
    return language;
}

console.log(`I love ${getLanguage()}`);

// ager xmpl er shob 'var' gula ke 'let' diye replace kore dilam
// ebar thik-ii 'I love JavaScript' print hobe

// 'let' holo block scope
// tai eta kono vabei 'if' block er baire jabe na