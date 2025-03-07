var express =require('express');
var app = express();

app.use(function(req,res,next){
    console.log("%s%s",req.method,res.url);
    next()
});
app.get('/',(req,res,next)=>{
    res.send('Welcome To Mars');
});
app.get('/help',(req,res,next)=>{
    res.send('HOw Can i Help You?');
});
app.listen(8000);
console.log("Server is running Port:8000");
