const fs = require('fs');
const child_process = require('child_process');
for(var i=0; i<3; i++){
    var Worker_Process=child_process.fork("support.js");
    Worker_Process.on('close',function(){
        console.log('child process exited with code'+code);
        
    })   
}



