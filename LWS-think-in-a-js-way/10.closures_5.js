//  10.closures_5.js
console.log('10.closures_5.js');

function stopWatch() {
    var startTime = Date.now();    

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}


var timer = stopWatch();

timer();

for (var i = 0; i < 100000000; i++) {
    var a = Math.random() * 1000000
}

timer();




