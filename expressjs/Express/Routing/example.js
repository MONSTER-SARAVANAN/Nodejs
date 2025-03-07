var express =require('express');
var app = express();

app.get('/',(req,res)=>{
    console.log("Got a Get Request for the homePage");
    res.send("Welcome To the Mars")
})
app.post('/',(req,res)=>{
    console.log("Got a Post Request for the homePage");
    res.send("Iam Martian")
})
app.delete('/del_student',(req,res)=>{
    console.log("Got a Delete Request for /del_student");
    res.send("Iam deleted")
})
app.get('/enrolled_student',(req,res)=>{
    console.log("Got a Request for the /enrolledStudent");
    res.send("Iam a enrolled Student")
})
app.get('/ab*cd',(req,res)=>{
    console.log("Got a Request for /ab*cd");
    res.send('Pattern Matched')
})
app.listen(5000);
console.log("app listening port:5000")