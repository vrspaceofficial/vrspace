const express  = require('express');
const router = express.Router();
const bcrypt  = require('bcryptjs');
const cookieParser = require('cookie-parser')
const authentication = require('../middleware/authentication')
const User = require('../model/userSchema')
cookieParser()

require('../db/conn')


router.get("/", (req, res)=>{
    res.send("server started")
})




router.post('/register', async(req, res)=>{
    const {name, email, phone, password, cpassword} = req.body;

    if (!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"Requirements are not fulfilled"})
    }

    try {
        
        const userExcist = await User.findOne({email:email});

        if (userExcist){
            return res.status(422).json({error:"Alert User Already Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"password and confirm password are not matched"});
        }
        else{
            const user = new User({name:name, email:email, phone:phone, password:password, cpassword:cpassword})
            await user.save()
            res.status(201).json({message:"User data Saved"})

        }


    } catch (error) {
        console.log(error)
    }


})
router.post("/signin", async (req, res)=>{

    const {email, password} = req.body;
    if(!email||!password){
        return res.status(400).json({error:"please Fill the email or password"})
    }

    try {
        const userExist = await User.findOne({email:email})
        if(!userExist){
            return res.status(401).json({error:"Invalid Login"})
        }
        else{
            const isMatched = await bcrypt.compare(password, userExist.password);
            
            if (!isMatched){
                return res.status(401).json({error:"Invalid Login"})
            }else{
                const token = await userExist.generateAuthToken()
                res.cookie("vrlogToken", token,{expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                }) 
                res.status(200).json("Login Successfull");
            }
        }

    } catch (error) {
        console.log(error)
    }

    
})


router.get('/getData', authentication, (req, res)=>{

    console.log("after Authentication")
    res.send(req.rootUser)
})

router.post('/contact', authentication, async (req, res)=>{

    try {
        const{name, phone, email, message}=req.body;
    

        if (!name || !phone || !email || !message){
            console.log('error in the contact Form')
            return res.json({error:"please fill the contact form"})
        }
        const userContact = await User.findOne({_id:req.UserId})
        if (userContact){
            const userMessage= await userContact.addMessage(name, phone, email, message);
            await userContact.save();
            res.status(201).json({message:"user contact successful"})
        }

    } catch (error) {
        console.log(error)
    }


    
})

router.get('/logout', (req, res)=>{
    console.log('Hello my Log out ')
    res.clearCookie('vrlogToken', {path:'/'});
    res.status(200).send("user log out")
    
})



module.exports = router