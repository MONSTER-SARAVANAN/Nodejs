
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf8');

const buf1 = new Buffer('this is a test');
console.log(decoder.write(buf1));

const buf2 = new Buffer('748697320697320612074c3a97374','hex');
console.log(decoder.write(buf2));

const buf3 = Buffer.from([0*62,0*75,0*66,0*66,0*65,0*72]);
console.log(decoder.write(buf3));
