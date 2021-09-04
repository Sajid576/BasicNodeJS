// node LWS-think-in-a-js-way/async-await-promise/5.promise.js

// vid -> 45 min 15 sec


// ettokhn amra dekhlam, onek gula promise por por thakle, ektar por ekta promise execute hoy
// ekhn emn ekta case ashlo j 
// shobgula promise k ekshathe chalano lagbe
// tokhn ki korbo sheta eibar dekhbo


const promise1 = Promise.resolve(`Promise 1 resolved.`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved.`);
    }, 2000);
});


// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

// upore prothome 'promose1' resolved hobe... 
// tar 2 sec por 'promose2' resolved hobe


// to execute all promises at once
// we gonna use -> Promise.all([array_of_promises])

Promise.all([promise1, promise2])
    .then(res => {
        console.log(res);
    });

// upore shob promise er resolved output gula... 
//ekta array er moddhe ekshathe ashbe
// jehetu 'promise2' 2 sec shomoy nitese
// so 2 sec por ekshathe promise1 r promise2 er resolved output ashbe
// jodio promise1 age resolve hoitese...
// kintu promise2 resolve howa na porjonto oita amra pacchi na


/*
Promise.race([promise1, promise2])
    .then(res => {
        console.log(res);
    });
*/

// Promise.race -> eta promise gular moddhe j shobar age resolve hobe... take return korbe only