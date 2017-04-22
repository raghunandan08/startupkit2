var express=require('express');
var path=require('path');
var chalk=require('chalk');
var open=require('open');

var port=3000;

var app=express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
    console.log(chalk.blue("server is running on port:"+port));
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+port);
    }
});