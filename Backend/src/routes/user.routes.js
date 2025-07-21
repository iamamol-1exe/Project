const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();

const {body} = require("express-validator");

router.post('/register',[
    
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],userController.registerUser);

router.post('/login',[
    body('email').notEmpty().trim().isEmail().withMessage('Invalid email'),
    body('password').notEmpty().trim().withMessage('Password is required'),
],
userController.loginUser
)

router.get('/logout',userController.logoutUser);

router.get('/profile',authMiddleware.authenticate,
    userController.getProfile
)


module.exports = router;
