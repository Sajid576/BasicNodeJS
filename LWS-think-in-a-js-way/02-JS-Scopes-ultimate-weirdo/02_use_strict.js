"use strict";

var x = 10;

function myFunc() {

    x = 80;
    console.log(`x=${x} from myFunc()`);
}

myFunc();

console.log(`x=${x}`);

/*

shurute 'use strict' comment kore jodi program takey run kori tahole x=20 print hobe.

eta hoise karon child tar parent er variable k access korte pare.
she jonno 'myFunc' tar parent er variable k modify korte parse.
boro boro program er khetre eta khubi problematic bpr.

ekta boro program a developer jodi bhul kore ekta function er vitore
'data-type' na diye jodi variable likhe dei...
mny developer likhte chaise 'var x'
kintu vule  likhe felse 'x'
tahole j problem ta hobe ta holo...
ei 'x' namey 'parent object' a jodi kono variable thake...
tahole oita chng hoye jabe...

so ei jhamela ta erate amra shurute 'use strict' likhi
eta lekhar fole dev jodi bhul kore data-type ullekh ta kore khali naam diye likhe
variable a value assign kore tahole program error thow korbe.


*/