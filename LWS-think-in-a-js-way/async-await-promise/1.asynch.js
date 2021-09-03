// node LWS-think-in-a-js-way/async-await-promise/1.asynch.js

// JS -> single thread language

//  code - 1 -> synchronous
const processOrder_1=(customer) => {
    console.log(`2. processing order for customer 1`);

    var currentTime=new Date().getTime();

    while(currentTime+3000>=new Date().getTime());

    console.log(`3. order processed for customer 1`);

};

console.log(`1. take order for customer 1`);
processOrder_1();
console.log(`4. completed order for customer 1`);

console.log();
console.log();


// ----------------------------------------

//  code - 2 -> asynchronous
const processOrder_2=(customer) => {
    console.log(`2. \t processing order for customer 1`);

    var currentTime=new Date().getTime();

    setTimeout(() => {
        console.log(`3. \t cooking completed`);
    },3000);

    console.log(`4. \t order processed for customer 1`);

};

console.log(`1. \t take order for customer 1`);
processOrder_2();
console.log(`5. \t completed order for customer 1`);


/* vid -> 11 min 40 sec

when JS gets an async func :-
CallStack -> Web API -> Callback Queue -> CallStack
*/



