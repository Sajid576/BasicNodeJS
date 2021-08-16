// 4 ta rule
// implicit binding 
// explicit binding
// new binding
// window binding

// ----------------------------------------------

// 1
// 'this' e root bujhte hole 
//  amader jante hobe func call kora hocche kon jaiga tai

// implicit : this bolte jei obj 'this' k use korse take bujhaii

// ----------------------------------------------

// 2

var printPlayerName = function () {
    console.log(this.p_name);
}


var sakib = {
    p_name: 'Sakib',
    p_age : 35
}

printPlayerName.call(sakib);

