//  closures_5.js
console.log('closures_5.js');

function stopWatch() {
    var startTime = Date.now();    

    function getDelay() {
        var endTime = Date.now();
        console.log(endTime - startTime);
    }

    return getDelay;
}


var timer = stopWatch();

timer();

for (var i = 0; i < 100000000; i++) {
    var a = Math.random() * 1000000
}

timer();

console.dir(timer)

// closure er moddhe 'startTime' er ref chilo bole amra bar bar 'getDelay' takey use korte partesi


