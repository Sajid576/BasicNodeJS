// this video is not from sumit bhaiya's playlist
// video link -> https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified


// node LWS-think-in-a-js-way/11-async-await-promise/9.async_await.js


// ei file a same kaaj ekbar 'then()' diye korsi
// r arekbar korsi async-await use kore

const makeRequest = (location) => {

    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);

        if (location === 'google') {
            resolve('hi from google!');
        }
        else {
            reject('we can only talk to google');
        }
    })
}


const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Procession...');
        resolve(`Extra information: ${response}`);
    })
}


// '.then()' diye korle erokom dekhai
/*
makeRequest('google')
    .then(res => {
        console.log('res:', res);
        return processRequest('pera nai');
    })
    .then(res2 => {
        console.log('res2:', res2);
    })
    .catch(err => console.log(err))
*/



// uporer same kaaj async-await diye korsi
const doWork = async (location) => {
    try {
        let res = await makeRequest(location);
        console.log('res:', res);

        let res2 = await processRequest('pera nai');
        console.log('res2', res2);
    } catch (error) {
        console.log(error);
    }
}

doWork('fb');