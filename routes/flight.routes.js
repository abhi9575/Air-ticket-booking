const express=require('express');
const Flight=require('../models/flight.model');
const router=express.Router();
router.get('/',async(req,res)=>{
    try{
        const flights=await Flight.find();
        res.status(200).json(flights);
    }catch(err){
        res.status(500).json({message:'server error'})
    }
});
router.get('/:id', async (req, res) => {
    const{id}=req.params;
    try{
      const flight=await Flight.findById(id);
      if(!flight){
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.status(200).json(flight);
    }catch(err){
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.post('/', async (req, res) => {
    const{ airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    try{
      const newFlight=new Flight({
        airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price
      });
  
      await newFlight.save();
      res.status(201).json({ message: 'Flight added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.put('/:id', async (req, res) => {
    const{id} = req.params;
  
    try{
      const flight=await Flight.findByIdAndUpdate(id, req.body, { new: true });
      if(!flight){
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.status(204).json();
    }catch(err){
      res.status(500).json({ message: 'Server Error' });
    }
  });
router.delete('/:id', async(req, res) => {
    const{id}=req.params;
  
    try{
      const flight=await Flight.findByIdAndDelete(id);
      if(!flight) {
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.status(202).json({ message: 'Flight deleted successfully' });
    }catch(err){
      res.status(500).json({ message: 'Server Error' });
    }
  });
module.exports=router;

   

