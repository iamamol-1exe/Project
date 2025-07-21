const express = require("express")
const functionMiddleware = require("../middlewares/function.middleware")
const functionController = require("../controllers/function.controller")
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("hello world");
})

router.post('/mp3',functionMiddleware.fecthMp3,
    authMiddleware.authenticate,
    functionController.fetchMp3
)
module.exports = router;