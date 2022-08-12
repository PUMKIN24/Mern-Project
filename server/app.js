
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const express = require('express')
const app = express()


//Schema
//const User = require('./model/userSchema')
//routes


//dotenv
dotenv.config({path : './config.env'})
//DB
require('./db/conn')
//middleware  json parse
app.use(express.json())
//middleware  routes
app.use(require('./router/auth'))
//Middleware
const middleware = (req,res,next) => {
    console.log('hello my middleware')
    next();
}

//PAGES
   

app.get('/about', (req,res)=>{
    res.send(`hello About world from server`)
})

app.get('/contact', (req,res)=>{
    res.send(`hello Contact world from server`)
})

app.get('/signin', (req,res)=>{
    res.send(`hello Login world from server`)
})

app.get('/signup', (req,res)=>{
    res.send(`hello Registration world from server`)
})


//PORT

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("server is spinning")
})