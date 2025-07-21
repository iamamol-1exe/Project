const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    password :{
        type : String,
        required : true,
    }

    
});

userSchema.methods.genrateAuthToken = function(){
    const token = jwt.sign({id: this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;



