var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('connection Successful');
    eventEmitter.emit('data received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data received',function(){
    console.log('data received successfully');
});
eventEmitter.emit('connection');
console.log('program ended');
