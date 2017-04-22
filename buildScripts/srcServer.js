import express from 'express';
import path from 'path';
import chalk from 'chalk';
// import open from 'open';
// var chalk=require('chalk');
// var open=require('open');

var port=3000;

var app=express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
    console.log(chalk.blue("server is running on port:"+port));
    if(err){
        console.log(err);
    }
    // else{
    //     open('http://localhost:'+port);
    // }
});