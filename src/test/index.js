const { pathToRegexp } = require('path-to-regexp');

let regxp = pathToRegexp('/home', [], { end: false });

console.log(regxp);

console.log(regxp.test('/home'));

console.log(regxp.test('/home/2'));

console.log(regxp.test('/home/app/10'));
