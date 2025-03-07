var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Welcome Mame')
});
app.get('/help',function(req,res){
    res.send('How can i help you?')
});
var server =app.listen(8000,function(){
    console.log("app listening at http://")
})