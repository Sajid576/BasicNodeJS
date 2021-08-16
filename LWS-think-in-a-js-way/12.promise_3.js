// 12.promise_3.js

// ettokhn amra dekhlam, onek gula promise por por thakle, ektar por ekta promise execute hoy
// ekhn emn ektacase ashlo j 
// shobgula promise k ekshathe chalan lagbe
// tokhn ki korbo sheta eibar dekhbo


const promise1 = Promise.resolve(`Promise 1 resolved.`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved.`);
    }, 2000);
});

/* 
promise1.then(res => console.log(res));
promise2.then(res => console.log(res));
*/

// to execute all promises at once
// we gonna use -> Promise.all([array_of_promises])

Promise.all([promise1, promise2])
    .then(res => {
        console.log(res);
    });


/*
Promise.race([promise1, promise2])
    .then(res => {
        console.log(res);
    });
*/

// Promise.race -> eta promise gular moddhe j shobar age resolve hobe... take return korbe only