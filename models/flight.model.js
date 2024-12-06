const mongoose=require('mongoose');
const {schema,model}=mongoose;
const flightSchema=new schema({
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
})
module.exports=model('Flight',flightSchema);