const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');

const userSign = mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:15,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        min:10,
        
        required :true
    },
    password:{
        type:String,
        required:true,
        minlength:8
        
    },
    cpassword:{
        type:String,
        required:true,
        minlength:8

    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[{
        name:{
            type:String,
            minlength:3,
            maxlength:15,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            min:10,
            
            required :true
        },
        message:{
            type:String
        }
    }],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]


})


userSign.pre("save", async function(next){
    try {
        
     if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        next();
    }   

    } catch (error) {
        console.log(error)
    }}
)


userSign.methods.generateAuthToken = async function (){
    try {

        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token; 

    } catch (error) {
        console.log(error)
    }    
}

userSign.methods.addMessage = async function (name, phone, email, message){
    this.messages = this.messages.concat({name, phone, email, message})
    await this.save();
    return this.messages

}



const User = mongoose.model("USERS", userSign);
module.exports = User;