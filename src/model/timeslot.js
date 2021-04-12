//var HashMap = require('hashmap');
const mongoose = require("mongoose");
const validator = require("validator");
 
const Schema = mongoose.Schema;

const timeslotSchema = mongoose.Schema({
    
    startTime: {
        type:String, 
        required:true
    },
    time1: {
        type:String,
         required:true
    },
    time2: {
        type:String,
         required:true
    },
    time3: {
        type:String,
         required:true
    },
    time4: {
        type:String,
         required:true
    },
    time5: {
        type:String,
         required:true
    },
    time6: {
        type:String,
         required:true
    },
    time7: {
        type:String,
         required:true
    },
    time8: {
        type:String,
         required:true
    },
    time9: {
        type:String,
         required:true
    },
    time10: {
        type:String,
         required:true
    },
    time11: {
        type:String,
         required:true
    },
    endTime: {
        type:String,
         required:true
    }
  
});
const timeSlot  = mongoose.model('timeSlot',timeslotSchema);
module.exports = timeSlot ; 
//const timeSlot = require("time-slots-generator");
//const salonTime = timeSlot.getTimeSlots([[30,570]],false,"half");
//console.log("All the time slots of the day with the given times with time 30min intervals\n",salonTime);