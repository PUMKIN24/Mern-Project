const express = require('express')
const router = express.Router()

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
            //the hashing is done userSchema as pre(save..)
            await user.save()
            
            res.status(201).json({message:'registration successful'})
        }

    }catch (err) {console.log(err)}
})


//route signin

router.post('/signin', async (req,res)=>{
    
    try {
        //destructuring
        const { email , password } = req.body
        
        if(!email || !password) {
            return res.status(400).json({error:'enter all credentials'})
        }

        const userLogin = await User.findOne({email:email})

        if (!userLogin) {
            res.status(400).json({ error: 'user error'})
        } else {
            res.json({ message : 'user signin successful'})
        }
      

    } catch (err) {
        console.log(err)
    }
})


module.exports = router

