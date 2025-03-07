var express = require('express');
var app = express();
app.get('/get_example3',function(req,res){
    res.send('<p>FirstName:'+req.query['firstname']+'</p><p>LastName:'+req.query['lastname']+'</p><p>password:'+req.query['password']+'</p><p>AboutYou:'+req.query['aboutyou']+'</p>');
});
var server =app.listen(8000,function(){
    var host =server.address().address
    var port =server.address().port
    console.log("app listening at http://%s,%s.",host,port);
})