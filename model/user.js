const { string } = require('joi');
const mongoose = require('mongoose')

const Schema =mongoose.Schema

const authSchema = new Schema({
    name: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min:6
    },
    userType:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },

    notifications:{
        packets : [
            {
                alertID:{types: Schema.Types.ObjectId, ref:'Packet',required:true}
            }
            

        ]
    }
});

module.exports = mongoose.model('User',authSchema)