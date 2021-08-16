var numbers = [1, 2, 3, 4]

var sum = numbers.reduce((prevVal, currVal, currIndx, arr) => {


    console.log(`Value: ${currVal} \t Index: ${currIndx} \t arr:${arr}`);

    return prevVal + currVal;
}, 0)

console.log(sum);0