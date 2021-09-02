// 10.closures_6.js
console.log(`10.closures_6.js`);
// Asynchronous case:


var a;

function async_closure() {
    a = 50;

    function myFunc() {
        console.log(a);
    }

    setTimeout(myFunc, 3000);   //it sends the 'myFunc' function to another thread and come back to the main thread after 3 sec
    console.dir(myFunc);
}

async_closure();
a = 20;

// 3 second gap
// ei gap er moddhe program 20 nmbr line(a=20) a chole ashe
// ebong a er value chng hoye jai

//  closure -> variable er 'reference' dhore rakhe, not the exact 'value'