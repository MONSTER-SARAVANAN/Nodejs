var fs =require('fs');

//async
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+data.toString());
});

//Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read:"+data.toString());
console.log("Program Ended");

//opening file
console.log("Going to OPen file");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file Open successfully");
})
