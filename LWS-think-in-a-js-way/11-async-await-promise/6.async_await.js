// node LWS-think-in-a-js-way/11-async-await-promise/6.async_await.js

// vid -> 50 min 53 sec

// promise er 'then...catch' er kaaj ta aro easily korar jonno
// JS 'async-await' er concept ta anse

// then onk gula thakle... sheta k handle kora tough hoye jete pare...



/* 
function friendlyFunction() {
    return `hello`;
}

console.log(friendlyFunction());
*/

// friendlyFunction() -> is a synchronous func
// we can make this func ASYNCHRONOUS, with 'async' keyword


async function friendlyFunction() {
    return `hello`;
}

console.log(friendlyFunction());


//  await -> promise er khetre 'then' j kaajta kore... await shetai kore

// async shesh na howa porjonto wait kore -> await