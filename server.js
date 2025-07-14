// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve images

// Routes
app.use('/api/pets', petRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
        bufferCommands: false,
        autoIndex: false
    })
    .then(() => app.listen(5000, () => console.log('✅ Server running on port 5000')))
    .catch(err => console.error('❌ DB connection error:', err));