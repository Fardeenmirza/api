const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/salonTable-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("connection is successfull...");
}).catch((err)=> {
    console.log("no connection");
})   