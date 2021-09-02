// 10.closures_7.js
console.log(`10.closures_7.js`);

// Closure functionality in case of sending request to the API

function apiFunction(url) {
    fetch(url)
        .then((res) => {
            console.log(res);
            console.log(url);
        })
}

// https://jsonplaceholder.typicode.com/todos/1
res=apiFunction(`https://jsonplaceholder.typicode.com/todos/1`);

console.log(`it's Asynchronous.`);
console.dir(res);
