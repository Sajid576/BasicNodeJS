// 12.promise_1.js

// Promise () -> func er 2 ta param 
                // prothom ta 'resolve'
                // porer ta 'reject'

// promise -> successful hole -> 'resolve' k call korbe
// promise -> fail korle      -> 'reject' k call korbe

const hasMeeting = true;

const meeting = new Promise((resolve,reject)=>{

    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time : "10:00 PM"
        };

        resolve(meetingDetails);
    } else {
        reject (new Error ("Meeting already scheduled!"));
    }

});


/* 
meeting
    .then ((res) => {
        // resolved data
    })
    .catch((err) => {
        // rejected data
    })
*/


meeting
    .then ((res) => {
        // resolved data
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    })

console.log('PROMISE k skip kore...ei line print korse');