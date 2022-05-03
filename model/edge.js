const { string } = require('joi');
const mongoose = require('mongoose')

const Schema =mongoose.Schema

const EdgeSchema = new Schema({
    name: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    ProdID: {
        type: String,
        min:2,
        max:2,
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
                alertID:{types: Schema.Types.ObjectId, required: true}
            }
            

        ]
    }
});

module.exports = mongoose.model('Edge', edgeSchema)