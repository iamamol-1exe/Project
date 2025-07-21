const mongoose = require('mongoose');

const BlackListTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires: 3600,
    
    }
});

module.exports = mongoose.model("blacklistToken",BlackListTokenSchema);
