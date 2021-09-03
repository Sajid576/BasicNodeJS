// node LWS-think-in-a-js-way/async-await-promise/8.async_await.js


// promise a reject er concept ta 'async-await' diye kivabe implement kore sheta dekhano hoise

// how it's done -> we use try-catch block

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


const addToCalendar = (meetingDetails) => {

    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
}



async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);

        console.log(calendar);
        
    } catch {
        console.log(`Something Went Wrong`);
    }
}

myMeeting();

console.log('PROMISE k skip kore...ei line print korse');