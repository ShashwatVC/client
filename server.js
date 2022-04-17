// Imports
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const router = require('./routes/auth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

dotenv.config();
// Routes
app.use(router)

// Database
mongoose.connect(process.env.DB_CONNECT,
    ()=> console.log('Connected to DB')
)
// Middleware


// listener
app.listen(3000, ()=> console.log('Server Up and Running'));



// const path = require('path');
// const bodyParser = require('body-parser');
// const econtroller = require('./controllers/err');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf =  require('csurf');
// const multer = require('multer');
// const flash = require('connect-flash');

// const MONGODB_URI = 'mongodb+srv://tester:Uadu84zhh0vkRFRf@cluster0.hg8rf.mongodb.net/bifrost?retryWrites=true&w=majority';

// const app = express();
// const profile = new MongoDBStore({
//     uri: MONGODB_URI,
//     collection: 'sessions',

// });