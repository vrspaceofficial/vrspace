const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const express = require('express');
const dotenv = require('dotenv')
app = express();
dotenv.config({path:"../config.env"})

app.use(express.json())

const authentication = async (req, res, next)=>{

    try {
        
        
        const token = req.cookies.vrlogToken;
        const VerifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:VerifyToken._id, "tokens.token":token})
         
        if (!rootUser){throw new Error("user not found")}
        req.token = token;
        req.rootUser = rootUser;
        req.UserId = rootUser._id;
        next();

    } catch (error) {
        console.log(error)
        res.status(401).send('unautherized')
       
    }
}

module.exports = authentication;