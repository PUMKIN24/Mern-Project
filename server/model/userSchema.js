const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    // here we also need tokens in the db so that we can understand the token user have is valid.
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//hashing the password
//before we save we have to hash the password i.e pre(save...)

userSchema.pre('save', async function (next) {
    if(this.isModified(`password`)) {

        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})


//generating jwt TOKEN //.sign takes two parameters 1) payload 2)secret key
userSchema.methods.generateAuthToken = async function (){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)

        //saving the token generated.
        this.tokens = this.tokens.concat({ token : token }) //the token on right side is above one.
        await this.save()
        return token
    } catch (err) {
        console.log(err)
    }
}

//collection creation 
const User = mongoose.model('USER', userSchema)

module.exports = User