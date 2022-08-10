const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('hello world from server')
})


app.listen(3000,()=>{
    console.log("server is spinning")
})