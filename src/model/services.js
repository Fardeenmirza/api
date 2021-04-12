const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const ServicesSchema = new mongoose.Schema({
        category:{
            type: String,
            required: true
        },
        
        cost:{
            type: Number,
            required: true
        }, 
        duration:{
            type: String,
            required:true
        }
})

//model = collection
const Services  = mongoose.model('Service',ServicesSchema);
module.exports = Services ; 