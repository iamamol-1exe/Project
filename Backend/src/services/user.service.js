const userModel = require("../models/user.model");
const {validationResult} = require("express-validator");
module.exports.createUser = async (name,email,password) =>{
    console.log(name,email,password);
    if (!name || !email || !password) {
        throw new Error("All fields are required");
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({name,email,password:hashedPassword});
    const token = user.genrateAuthToken();

    return {user,token};
}