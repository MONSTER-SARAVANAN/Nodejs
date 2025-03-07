const { Socket } = require('dgram');
const { Server } = require('http');
const net = require('net');
var net = net.createServer((Socket)=> {
    Socket.end('goodbye\n');
}).on('error', (err)=>{
    throw err
});

Server.listen(()=>{
    address=Server.address();
    console.log('Opened Server On %j address');
    
})