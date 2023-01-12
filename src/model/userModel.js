const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
    dob: {
        type: String,
        required: true
    }, 
    mobile: {
        type: String,
        required: true,
        unique: true,
    }, 
    isIndian:{
        type:Boolean,
        required:true
    }

        
}) 


module.exports = mongoose.model("User95", userSchema)