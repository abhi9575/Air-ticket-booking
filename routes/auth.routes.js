const express=require('express');
const jwt=require('jsonwebtoken');
const User=require('../models/user.model');
const router=express.Router();

router.post('/register',async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const userExists=await User.findOne({email});
        if(userExists){
            return resizeBy.status(400).json({message:'User  exists'});

        }
        const user=new User({name,email,password});
        await user.save();
        res.status(201).json({message:'User registered '});

    }catch (err){
        res.status(500).json({message:'server error'});
    }
});
router.post('/login',async (req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if (!user){
            return res.status(400).json({message:'Invalid email or password'});
        
        }
        if (user.password!==password){
            return res.status(400).json({message:'ib=nvalid email or password'});
        }
        const token =jwt.sign({userId:user._id},process.env.JWT_SECRET,{
            expiresIn:'4H',
        });
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({message:'server error'});
    }
});
module.exports=router;
