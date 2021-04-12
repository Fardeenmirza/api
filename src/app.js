const mongoose = require('mongoose');
const db = require("./db/connection");
const express = require('express');
const app = express();
const Cust = require("./models/customers");
const Services = require("./models/services");
const Booking = require("./models/booking");
const timeSlot = require("./models/timeslot");

const port = process.env.PORT || 8000;
const bodyParser = require('body-parser')
let Custs = [];
app.use(express.json());
//Create new customer
app.post("/Customer",async(req,res)=>{
    try{
    console.log(req.body); 
    const user = new Cust(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);}
    })
    
//get the customers
app.get("/Customer",async(req,res)=>{
    try{
        const customerData = await Cust.find();
        res.send(customerData)
    }catch(e){
            res.send(e);
    }
})
// get single customer
app.get("/Customer/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const custData = await Cust.findById(_id);
        console.log(custData);
        if(!custData){
            return res.status(404).send();
        }else{
            res.send(custData);
        }
        res.send(customerData)
    }catch(e){
            res.status(500).send(e);
    }
})
//updating customer
app.patch("/Customer/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const custUpdate = await Cust.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(custUpdate);
    }catch(e){
        res.status(404).send(e);
    }
})

app.listen(port,()=>{  
  console.log(`connection is setup at ${port}`);
})
//deleting the customer
app.delete("/Customer/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const delCustomer = await Cust.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(delCustomer);

    }catch(e){
        res.status(500).send(e);
    }
})
// Create new services for salon

app.post("/Services",async(req,res)=>{
    try{
    console.log(req.body); 
    const service = new Services(req.body);
    const createService = await service.save();
    res.status(201).send(createService);
    }catch(e){
        res.status(400).send(e);}
    })
    
    //get the services
    app.get("/Services",async(req,res)=>{
        try{
            const getservice = await Services.find();
            res.send(getservice)
        }catch(e){
                res.send(e);
        }
    })

    // get single services
app.get("/Services/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const service = await Services.findById(_id);
        console.log(service);
        if(!service){
            return res.status(404).send();
        }else{
            res.send(service);
        }
        res.send(service)
    }catch(e){
            res.status(500).send(e);
    }
})

//updating services
app.patch("/Services/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const serviceUpdate = await Services.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(serviceUpdate);
    }catch(e){
        res.status(404).send(e);
    }
})

//deleting the services
app.delete("/Services/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const delServices = await Services.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(delServices);

    }catch(e){
        res.status(500).send(e);
    }
})

// booking a service

app.post("/Booking",async(req,res)=>{
    try{
    console.log(req.body); 
    const booking = new Booking(req.body);
    const newBooking = await booking.save();
    res.status(201).send(newBooking);
    }catch(e){
        res.status(400).send(e);}
    })
      
       
        
 