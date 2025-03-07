const { log } = require('console');
const { connected } = require('process');
const { Stream } = require('stream');

tls =require('tls');

function Connected(Stream){
    if(Stream){
        Stream.Write("GET/HTTP/1.0/n/rHost:encrypted.google.com:443/h/r/h/h");
    }else{
        console.log("Connection Failed");
    }
}


var dummy =this;
dummy.socket=tls.Connect(443,'encrypted.google.com',
function(){
    dummy.Connected=true;

if(dummy.socket.authorized){
    dummy.socket.setEncoding('utf-8');
    connected(dummy.socket);
}else{
    console.log(dummy.socket.authorizationError);
    connected(null);
}
});

dummy.socket.addListener('data',function(data){
    console.log(data);
    
})


dummy.socket.addListener('error',function(error){
if(!dummy.connected){
    connected(null);
}
console.log("failed");
console.log(error);
});
dummy.socket.addListener('close',function(){

})