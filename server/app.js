
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const express = require('express')
const app = express()


//Schema
const User = require('./model/userSchema')


//dotenv
dotenv.config({path : './config.env'})

//MONGO DB
const DB = process.env.DATABASE

mongoose.connect(DB).then(() => {console.log(`DB CONNECTED`)})
.catch((err) => console.log(`DB ERROR`))                                                                                        

//PAGES
app.get('/', (req,res)=>{
    res.send(`hello world from server`)
})   

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