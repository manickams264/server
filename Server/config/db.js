const mongoose = require("mongoose")
 mongoose.connect(process.env.MONGOURL||"mongodb+srv://ManickamS:Manu1234@mern.aoqa1.mongodb.net/?retryWrites=true&w=majority&appName=Mern")
 const connection=mongoose.connection;
 connection.on('connected',()=>{
    console.log("DB CONNECTED")
 }
)
connection.on('error',()=>console.log("DB ERROR"))
module.exports=mongoose