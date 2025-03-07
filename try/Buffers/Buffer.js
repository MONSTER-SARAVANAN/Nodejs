// //Create an uninitiated buffer
// var buf =new Buffer(10);
// //create a Buffer from Array
// var buf = new Buffer([10,20,30,40,50])
// //create a buffer from String
// var buf = new Buffer("Simple","utf-8");
// //buf.write(string[offset][,length][,encoding])
//example
buf = new Buffer(26);
for(var i=0; i<26; i++){
    buf[i] =i+97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString('undefined',0,5));