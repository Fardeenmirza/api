const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required : true,
            unique:[true,"Email id is already present"],
        },
        phone:{
            type: Number,
            minLength:9,
        }, 
        address:{
            type: String,
            required:true
        }
})

//model = collection
const Cust  = mongoose.model('Customer',customerSchema);
module.exports = Cust ; 