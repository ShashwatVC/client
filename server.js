// Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const router = require('./routes/auth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

// Database
mongoose.connect(process.env.DB_CONNECT,
    ()=> console.log('Connected to DB')
)
// Setup
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



// Routes
app.use(router)


// Middleware


// listener
app.listen(3000, ()=> console.log('Server Up and Running'));



