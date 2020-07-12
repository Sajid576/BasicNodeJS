var http = require('http');
var fs = require('fs');  //fs does many thing specially read write


fs. readFile('readMe.txt','utf8', function(err, contents) {
    console. log(contents);
});


var contents = fs.readFileSync('readMe.txt', 'utf8');
console.log('hey, '+contents);
console. log('after calling readFile');