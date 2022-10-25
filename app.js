const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const port = process.env.PORT||5000;
const app = express();
const path  = require('path')
// const path = require('path')

dotenv.config({path:"./config.env"})


require('./db/conn')
const userSchema = require('./model/userSchema');

app.use(cookieParser())
app.use(express.json())
app.use(require('./routes/auth'))



if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    
    }



app.listen(port, ()=>{
    console.log(`site is listening at port ${port}`)
})

