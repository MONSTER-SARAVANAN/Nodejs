// var fs =require('fs');
// var data ="";

// //create a readable stream
// var readerStream=fs.createReadStream("input.txt");

// //set the encoding to be utf-8
// readerStream.setEncoding('utf8');

// //handle stream events --> data,end,error
// readerStream.on('data', function(chunk){
//     data = chunk;
// });
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error',function(err){
//     console.log(err.stack);
// });
// console.log("Program Ended");

//Writing code
var fs =require('fs');
var data ="A Solution of all Technology";
//create a Writeable stream
var writerStream=fs.createWriteStream("Output.txt");

// //set the encoding to be utf-8
writerStream.write(data,'utf8');

//mark end of file
writerStream.end();

 //handle stream events --> finish and error
writerStream.on('finish', function(){
    console.log("Write Complete");
});
writerStream.on('error',function(){
    console.log(err.stack);
});
console.log("Program Ended");