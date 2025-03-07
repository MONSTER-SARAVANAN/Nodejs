var http = require('http');
var fs = require('fs');
var url = require('url');

//create a server
http.createServer(function(req,res){
    var pathname =url.parse(req.url).pathname;
    console.log("Request for"+pathname+"received.");
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data.toString());
        res.end();
    });
}).listen(8080);
console.log("server running at port:8080");
