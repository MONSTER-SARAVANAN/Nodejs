//decode string
punycode = require('punycode');
console.log(punycode.decode('saravanan-pta'));
//encode string
punycode = require('punycode');
console.log(punycode.encode(''));

//toAscii(domain)
// punycode = require('punycode');
// console.log(punycode.toAscii('manana.com'));

//toUnicode(domain)
punycode = require('punycode');
console.log(punycode.toUnicode('xn-maana-pta.com'));
