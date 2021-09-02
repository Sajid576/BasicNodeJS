// vid -> 55 min 05 sec

console.log(`closures_8.js`);

// onk job interview te eta jiggesh kore

// closure jokhn ekta loop er moddhe kaaj kore... tokhn onk shomoy amra ei problem tai pori

// let
for (let i = 0; i < 3; i++) {

    const myFunc = () => {
        console.log(i)
    }
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 3000);
} 


// var
// for (var i = 0; i < 3; i++) {

//     const myFunc = () => {
//         console.log(i)
//     }
//     console.log(i);
//     console.dir(myFunc);
//     setTimeout(myFunc, 3000);

// }

console.log(`After For Loop.`);


// 'let' thakle print hoy -> 0 1 2
// kintu 'var' thakle 3 bar 3 print hocche. keno ?

// 59 min 00 sec
/**
 * let dewar fole eta closure scope a chole jabe
 * ebong 3 baar iterate korar jonno 3 ta separate 'i' create hobe
 */

/** 
 * 'var' global scope a thake...
 * ebong proti iteration notun kono reference create hoyna
 * same reference tai proti iteration a pass hoy
*/



/**
 * For more detail  go to the following link: 
 * https://stackoverflow.com/questions/30899612/explanation-of-let-and-block-scoping-with-for-loops
 */