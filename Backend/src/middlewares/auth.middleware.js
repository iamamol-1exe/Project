const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const BlackListModel = require("../models/balcklistToken.model")


module.exports.authenticate = async (req,res,next) =>{
    // Safely extract JWT from cookies or the Authorization header (Bearer <token>)
    const token = (req.cookies && req.cookies.token) ||
                  (req.headers.authorization ? req.headers.authorization.split(" ")[1] : null);
    if(!token) {
       return res.status(401).json({
            message : "Unauthorized access, please login first"
        })
    }
    const isBlackListed = await BlackListModel.findOne({ token });
    if(isBlackListed) {
        return res.status(401).json({
            message : "Unauthorized token, blacklisted token"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id);
        return next();
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized access, please login first"
        })
    }

    
}
