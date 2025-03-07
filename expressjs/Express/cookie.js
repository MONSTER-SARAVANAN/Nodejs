var express =require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/cookieset',(req,res)=>{
    res.cookie('cookie_name','cookie_value');
    res.cookie('company','monster');
    res.cookie('name','saravanan');
    res.status(200).send('cookie is set')
});

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Monster')
});
app.listen(4000);
console.log("app listening Port:4000");
