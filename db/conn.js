const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const DB = process.env.DATABASE;



mongoose.connect(DB).then(()=>console.log("DATABASE successfully connected")).catch((err)=>{
    console.log(`Connection Failed ${err}`)
})



