const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req,res)=>{
    res.send(`hello world from server`)
})


//if we are not using async await instead we can use promise i.e with .then and .catch... 

//route registration

router.post('/register',  async (req,res) =>{
    const {name, email,phone,work,password,cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({ error: "all fields are necessary"})
    }


    try {
        
       const userExist = await User.findOne({ email : email })

        if (userExist) {
        return res.status(422).json({ error: "this email is already used"})
        } else if (password != cpassword) {
        return res.status(422).json({ error: "enter the password properly"})    
        } else {
            const user = new User({ name , email , phone , work , password , cpassword })

            //hashing have to be done before saving entire data in the db.. so we use a middle ware here
            //the hashing is done in  userSchema using  pre(save..) method.
            await user.save()
            
            res.status(201).json({message:'registration successful'})
        }

    }catch (err) {console.log(err)}
})


//route signin

router.post('/signin', async (req,res)=>{
    
    try {
        let token;
        //destructuring
        const { email , password } = req.body
        
        if(!email || !password) {
            return res.status(400).json({error:'enter all credentials'})
        }

        //here in userLogin we get the entire data stored in the db by using the findOne method
        const userLogin = await User.findOne({email:email})


        if (userLogin){
        //comparing the password in the db and entered by user. 
        const isMatch = await bcrypt.compare(password,userLogin.password)
        

        //generating jwt
        token = await userLogin.generateAuthToken()
console.log(token)
        
        if (!isMatch) {
            res.status(400).json({ error: 'Invalid credentials pass'})
        } else {
            res.json({ message : 'user signin successful'})
        }
      
        } else {
            res.status(400).json({ error: 'Invalid credentials'})
        }
       

       

    } catch (err) {
        console.log(err)
    }
})


module.exports = router

