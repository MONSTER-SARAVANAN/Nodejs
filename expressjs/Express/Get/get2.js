var express = require('express');
var app = express();
app.get('/get_example2',function(req,res){
    res.send('<p>userName:<p>lastname:'+req.query['lastname']+'</p>');
});
var server =app.listen(8000,function(){
    var host =server.address().address
    var port =server.address().port
    console.log("app listening at http://%s,%s.",host,port);
})