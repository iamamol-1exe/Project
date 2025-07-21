const balcklistTokenModel = require("../models/balcklistToken.model");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");

module.exports.registerUser = async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({
            message:"All fields are required"
        })
    }

    const user = await userService.createUser(name,email,password);

    res.status(201).json({
        message:"User registered successfully",
        user
    })
}

module.exports.loginUser = async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }

    const {email,password} = req.body;
    const user = await userModel.findOne({email : email}).select("+password");
    if(!user) {
        return res.status(401).json({
            message : "Invalid email or password"
        })
    }
    const isMatch = await user.comparePassword(password);
    if(!user) {
        return res.status(401).json({
            message : "Invalid email or password"
        })
    }
    const token = user.genrateAuthToken();
    res.cookie("token", token);
    res.cookie("user", user.email);
    res.status(200).json({
        token : token,
        message : "Login successful",
    });
}

module.exports.logoutUser = async (req,res,next) =>{
    const token = (req.cookies && req.cookies.token) ||
    (req.headers.authorization ? req.headers.authorization.split(" ")[1] : null);
    
    if(!token ) {
        res.status(401).json({
            message : "Token is required"
        })
    }
    await balcklistTokenModel.create( {token});

    res.clearCookie("token");
    res.status(200).json({
        message : "Logout successful"
    })
    next();

}

module.exports.getProfile = async (req,res) =>{
    res.status(200).json({
        user : req.user
    });
}

