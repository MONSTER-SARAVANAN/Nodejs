    // process.exit();
// console.log(req.headers);
const fs = require('fs');

const requestHandler = (req,res) =>{
    const url =req.url;
    const method =req.method;

    if(url === '/' ){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>Enter Your Details</title></head>')
        res.write('<label>Enter YOur Details</label>')
        res.write('<body><form action="/message" method="POST"><input type="text"  name="message"><input type="submit" value="send"></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method == 'POST'){
        const body =[]
        req.on('data',(chunk)=>{
            body.push(chunk);    
        })
        return req.on('end',()=>{
            console.log('End event Received');
            const parseBody = Buffer.concat(body).toString();
            const message =parseBody.split('=');
            fs.writeFile('hello.txt',message[1],()=>{
            console.log('FileWrite completed');
            res.setHeader('Location','/')
            res.statusCode =302;
            return res.end();
            });
            
        })
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>MONSTER SARAVANAN</title></head>')
    res.write('<body><h1>HELLO NODE JS SERVER</h1></body>')
    res.write('</html>')
    res.end();
}
// module.exports = {
//     handler:requestHandler,
//     someText:'Printing some Text'};

module.exports.handler = requestHandler;
module.exports.someText = 'Ethavuthu Solluya'