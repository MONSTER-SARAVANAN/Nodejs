
//Bocking Code
var fs =require('fs');
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("program Ended");

//nonBlocking Code
var fs =require('fs');
fs.readFileSync('input.txt',function(err,data){
    if(err)return console.error(err)
        console.log(data.toString());
    console.log("program Ended for nonblocking");
    
})