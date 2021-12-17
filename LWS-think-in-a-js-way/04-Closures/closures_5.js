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
/**
 * JS  automatically collects the garbage but in some * rare situation  JS doesn't collect garbage. 
 * For example,  in above situation , the garbage collector won't collect garbage of closures variable because JS will think that it might be used in later portion of the script.So, programmer can manually optimize the performance by clearing the garbage( timer=null  ).
 * 
 */

console.dir(timer)

// closure er moddhe 'startTime' er ref chilo bole amra bar bar 'getDelay' takey use korte partesi


