var express =require('express');
var multer = require('multer');
var app = express();
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads');
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalName)
    }
});

var upload = multer({storage:storage}).single('myfile');
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post('/uploadingjavatpoint',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.send("Error Uploading file")
        }
        res.send("File is Uploaded Successfully")
    });
});
app.listen(8000,()=>{
    console.log("Server is running on port:8000");
})