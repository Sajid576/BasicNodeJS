// node LWS-think-in-a-js-way/async-await-promise/3.promise.js
// vid -> 30 min 45 sec

// 'promise' use hoy muloto 
// kono ekta async operation er result k
// handle korar jonno

// Promise (callback func) -> ei 'callback func' er 2 ta param 
// prothom ta 'resolve'
// porer ta 'reject'

// promise -> successful hole -> 'resolve' k call korbe
// promise -> fail korle      -> 'reject' k call korbe

const hasMeeting=true;

const meeting=new Promise((resolve,reject) => {

    if(!hasMeeting) {
        const meetingDetails={
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };

        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled!"));
    }

});


// upore amra 'Promise' banalam
// kintu promise k use korte hole amader duita jinisher chain banan lagbe
// ekta holo 'then', arekta holo 'catch'
// 'promise.then()' call hobe jodi promised ta 'resolved' hoye ashe
// 'promise.catch()' call hobe jodi promised ta 'rejected' hoy


/* 
myPromise
    .then ((res) => {
        // resolved data
    })
    .catch((err) => {
        // rejected data
    })
*/


meeting
    .then((res) => {
        // resolved data
        console.log(res);
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    })


console.log('PROMISE k skip kore...ei line print korse');