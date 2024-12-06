const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const flightRoutes = require('./routes/flight.routes');
const bookingRoutes = require('./routes/booking.routes');
require('dotenv').config();
const app = express();
app.use(express.json());
connectDB().catch((err) => {
  console.error('Error connecting to the database:', err);
});
app.use('/api/auth',authRoutes);
app.use('/api/flights',flightRoutes);
app.use('/api/booking',bookingRoutes);
app.use((req,res,next)=>{
  const error=new Error('Not Found');
  error.status=404;
  next(error);
});
app.use((err,req,res,next) => {
  res.status(err.status||500).json({
    message: err.message||'Internal Server Error',
  });
});
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});
