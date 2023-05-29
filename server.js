// Imports
const express = require('express');
const app = express();
const path = require('path');
const multer  = require('multer')

const dotenv = require('dotenv')
const router = require('./routes/auth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Socket } = require('socket.io');

dotenv.config();

// Database
mongoose.connect(process.env.DB_CONNECT,
    ()=> console.log('Connected to DB')
)

// Static storage
const fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'images');
    },
    filename:(req,file,cb) => {
        cb(null, file.originalname);
    }
})
const filefilter = (req,file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype ==='image/jpeg' || file.mimetype === 'image/jpg'){
    cb(null, true)
    }
    else{
    cb(null, false)
    }
};

// Setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


// integrating static file handeling and app
app.use(multer({storage: fileStorage, filefilter: filefilter}).single('image'));
app.use('/images',express.static(path.join(__dirname,'images')));

// Routes
app.use(router)





// listener
const server = app.listen(3000, ()=> console.log('Server Up and Running'));
const io =  require('./socket').init(server);
io.on('Connection',Socket=>[
    console.log('Client_Conneced')
])



