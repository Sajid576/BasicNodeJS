// node LWS-think-in-a-js-way/02-JS-Scopes-ultimate-weirdo/02_use_strict.js

"use strict";

var x = 10;

function myFunc() {

    x = 20;
    console.log(`x=${x} from myFunc()`);
}

myFunc();

console.log(`x=${x}`);

/*
With strict mode, we can not use undeclared variables.



amra jani j child tar parent er variable k access and modify korte pare.
she jonno 'myFunc', which is a child of 'global object', can access and modify 'var x' in line 5. 
'var x' is a variable of 'global object'.
amra myFunc a 'x' namer kono var declare kori nai. so line 20 er 'x' ta actually parent er variable. 


boro boro program er khetre eta khubi problematic bpr.

ekta boro program a developer jodi bhul kore ekta function er vitore
variable declare na korei, variable a value assign kore dei...
mny developer lekhar kotha 'var y'
kintu vule  likhe felse 'y'
tahole j problem ta hobe ta holo...
ei 'y' namey jodi 'parent object' a kono variable theke thake...
tahole parent er oi variable ta chng hoye jabe...

so ei jhamela ta erate amra shurute 'use strict' likhi
eta lekhar fole dev jodi bhul kore data declare na kore assign kore fele
program tokhn error throw korbe.


*/