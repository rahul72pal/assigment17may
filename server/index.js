const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Databse Connected")
});

app.use('/api', jobRoutes); // All routes are prefixed with /api

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
