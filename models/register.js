const mongoose = require("mongoose")
const { Schema, model } = require("mongoose");
const registerSchema = new Schema({
    category: {
        type :String,
        required : true,
    },
    location:{
        type: String,
        required: true,
    },
    city: {
        type : String,
        required: true,
    },
    pincode: {
        type : Number,
        required: true,
    },
    problemDescription: {
        type: String,
        required: true,
    },
    photos: {
        path: String,
        // filename: String,
        // contentType : String,
        // data: {
        //     Type: Buffer,
        // }
    },
})


const register = mongoose.model('Register' , registerSchema)
 

module.exports = register;