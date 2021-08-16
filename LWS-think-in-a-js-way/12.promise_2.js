// 12.promise_2.js

// multiple 'then' -> one by one execute hoy

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {

    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };

        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting already scheduled!"));
    }

});

// way - 1
/* 
const addToValendar = (meetingDetails) => {
    return new Promise((resolve,reject)=>{
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    })
}
*/



// way -2 -> karon amader kebol 'resolve' ache.... tai iporer ta eivabeo kora jai
const addToCalendar = (meetingDetails) => {

    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
}





meeting
    .then(addToCalendar)
    .then((res) => {
        // resolved data
        console.log(res);
    })
    .catch((err) => {
        // rejected data
        console.log(err.message);
    })

console.log('PROMISE k skip kore...ei line print korse');