// node LWS-think-in-a-js-way/11-async-await-promise/2.asynch.js

/*
take order -> process order -> order complete

jodio eta async function, kintu 'callback' function use korar maddhome 
amra code er flow takey control korte partesi.

*/


const takeOrder=(customer,callback) => {
    console.log(`1. \t processing order for ${customer}`);
    callback(customer);
}


const processOrder=(customer,callback) => {
    console.log(`2. \t processing order for ${customer}`);

    setTimeout(() => {
        console.log(`3. \t cooking completed`);
        console.log(`4. \t order processed for ${customer}`);
        callback(customer);

    },3000);
};


const completeOrder=(customer) => {
    console.log(`5. \t completed order for ${customer}`);
}

takeOrder('customer 1',(customer) => {
    processOrder(customer,() => {
        completeOrder(customer);
    })
})

console.log('hello its asynchronous now !!');


/*

kintu ei callback er ekta problem ase
beshi call back use korle, code er readability kome jai.
ei problem takey bole 'callback hell'.

'callback hell' issue takey solve korar js anse 'promise'

*/