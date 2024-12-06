const express=require('express');
const Booking=require('../models/bookings.model');
const User=require('../models/user.model');
const Flight=require('../models/flight.model');
const router=express.Router();

router.get('/',async(req,res)=>{
    const{userId}=req.query;
    try{
      const bookings=await Booking.find({user:userId}).populate('user').populate('flight');
      res.status(200).json(bookings);
    }catch(err){
      res.status(500).json({message:'Server Error'});
    }
  });
module.exports=router;
