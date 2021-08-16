var sakib = {
    p_name: 'Sakib',
    p_age: 35
};

// ---------------------------------------
// call () - 1

// var printName = function () {
//     console.log(this.p_name);
// }

// printName.call(sakib);


// ---------------------------------------
// call () - 2

// var printName = function (v1, v2, v3) {
//     console.log(`${this.p_name} is ${v1}, ${v2} & ${v3}`);
// }

// var v1 = 'Handsome';
// var v2 = 'All-rounder';
// var v3 = 'Best Player';

// printName.call(sakib, v1, v2, v3);


// ---------------------------------------

var printName = function (v_arr) {
    // console.log(`${this.p_name} is ${v_arr[0]}, ${v_arr[1]} & ${v_arr[2]}`);
    console.log(this);
}

var v1 = 'Handsome';
var v2 = 'All-rounder';
var v3 = 'Best Player';
var v_arr = [v1, v2, v3];

printName.apply(sakib, v_arr);


