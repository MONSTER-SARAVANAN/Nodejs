console.log(`Process Architcture:${process.arch}`);
console.log(`Process PID:${process.pid}`);
console.log(`Process Platform:${process.platform}`);
console.log(`Process Version:${process.version}`);


console.log(`Current:${process.cwd()}`);
console.log(`Uptime:${process.uptime()}`);

//Child Process-exec
// const exec =require('child_process');
// const { stdout, stderr } = require('process');
// exec('my.bat',(err,stdout,stderr)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(stdout);    
// });

