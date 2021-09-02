// vid -> 51 min 00 sec
console.log(`closures_7.js`);

// API er  khetre 'closure' kivabe use hoy sheta dekhbo 

function apiFunction(url) {
    fetch(url)
        .then((res) => {
            console.log(res);
        })
}

// https://jsonplaceholder.typicode.com/todos/1
apiFunction(`https://jsonplaceholder.typicode.com/todos/1`);

console.log(`it's Asynchronous.`);