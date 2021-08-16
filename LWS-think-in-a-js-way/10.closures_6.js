// 10.closures_6.js
console.log(`10.closures_6.js`);

// etto dekhsilam 'synchronous' er khketre closure kivabe kaaj kore
// ebar dekhbo 'asynchronous' er khetre closure kmne kaaj kore

var a;

function async_closure() {
    a = 50;

    function myFunc() {
        console.log(a);
    }

    setTimeout(myFunc, 3000);
    console.dir(myFunc);
}

async_closure();
a = 20;

// 3 second gap
// ei gap er moddhe program 21 nmbr line(a=20) a chole ashe
// ebong a er value chng hoye jai

//  closure -> variable er 'reference' dhore rakhe, not the exact 'value'