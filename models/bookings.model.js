const mongoose=require('mongoose');
const {schema,model}=mongoose;
const bookingSchema=new schema({
    user: { type: Types.ObjectId, ref: 'User' }, 
    flight: { type: Types.ObjectId, ref: 'Flight' },
   
});

module.exports=model('Booking',bookingSchema);