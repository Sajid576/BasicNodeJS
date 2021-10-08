
/*
1. Combine Arrays (Concatenate Arrays)

There are a variety of ways to combine arrays, but the spread operator allows you to place this at any place in an array. If you'd like to combine two arrays and place elements at any point within the array, you can do :
*/

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];
console.log(arr2)
// arr2 = ["one", "two", "three", "four", "five"]

/*
2. Copying Arrays
*/
var arr = [1,2,3];
var arr2 = [...arr];
// arr2 = [1,2,3]
console.log(arr2)

/**
 * 3. Calling Functions without Apply
 */
function doStuff (x, y, z) {
        console.log(x,'-',y,'-',z);
}
var args = [0, 1, 2];
// Call the function, passing args 
doStuff.apply(null, args);

doStuff(...args);

/**
 * 
 * 4. Destructuring Arrays
 */
 let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4,c:5 };
 console.log(x); // 1
 console.log(y); // 2
 console.log(z); // { a: 3, b: 4,c:5 }
 
/**
 * Using Math functions 
 */
 let numbers = [9, 4, 7, 1];
console.log( Math.min(...numbers) ); // 1

/**
 * 7. Combining Two Objects
 */

 var carType = {
    model: 'Toyota',
    yom: '1995'

};
  
  var carFuel = 'Petrol';
  
  var carData = {
    ...carType,
    carFuel
  }
  
  console.log(carData);

/**
 * 8. Separate a String into Separate Characters
 */

let chars = [ 'A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

