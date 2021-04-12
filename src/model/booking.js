const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const timeslot = require("./timeslot");


const bookingSchema = mongoose.Schema({
    
    startTime: {
        type:String, 
        required:true
    },
    endTime: {
        type:String,
         required:true
    },
    clientName: {
        type:String, 
        required:true
    },
    serviceRequested: {
        type: String,
        required:true
    }
});
 
const Booking = mongoose.model('Booking',bookingSchema);
module.exports = Booking; 

var newStartTime = "10:30";
var newEndTime = "11:00";
var newClientName = 'Mirza';

var conflictingBookings =  Booking.find()
    .where('startTime').lt(newEndTime)
    .where('endTime').gt(newStartTime)
    .exec();
console.log(conflictingBookings);

