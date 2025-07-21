const mongoose = require("mongoose");

function connectToDB (){
    console.log(process.env.MONGO_URI);
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/newproject";
    mongoose.connect(uri)
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = connectToDB;

