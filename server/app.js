const mongoose = require("mongoose")
const express = require('express');
const app = express();


//Mongodb Connection 

const DB = "mongodb+srv://jerrymathew:jerry@cluster0.d8rajeo.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB
).then(()=>{
    console.log("DB CONNECTED")
}).catch((err) => console.log("DB ERRRRRROR"))


//Middleware




//PAGES
app.get('/', (req,res)=>{
    res.send(`hello world from server`);
});

app.get('/about', (req,res)=>{
    res.send(`hello About world from server`);
});

app.get('/contact', (req,res)=>{
    res.send(`hello Contact world from server`);
});

app.get('/signin', (req,res)=>{
    res.send(`hello Login world from server`);
});

app.get('/signup', (req,res)=>{
    res.send(`hello Registration world from server`);
});


//PORT
app.listen(3000, ()=>{
    console.log("server is spinning");
});