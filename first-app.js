setTimeout(() => {
   console.log("Athula onnum illa");
   
}, 4000);

 const fs = require('fs');
fs.writeFileSync('hello.txt', 'hello js node js')


//promise
let myDearThala = new Promise ((myResolve,myReject)=>{
    setTimeout(()=>{
        myResolve('SARAVANAN');
    },3000)
})
myDearThala.then((name)=>{
    return 'MONSTER'+name;
}).then((name)=>{
    console.log(name);
}).catch(()=>{
    console.log("Failed");  
}).finally(()=>
console.log("THERI BABy")
)