const express = require('express');
const app = express();

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




app.listen(3000, ()=>{
    console.log("server is spinning");
});