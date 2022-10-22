const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const port = process.env.PORT||5000;
const app = express();

dotenv.config({path:"./config.env"})


require('./db/conn')
const userSchema = require('./model/userSchema');

app.use(cookieParser())
app.use(express.json())
app.use(require('./routes/auth'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    const path  = require('path')
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', "build", "index.html"))
            })
    
    }



app.listen(port, ()=>{
    console.log(`site was listening at port ${port}`)
})

