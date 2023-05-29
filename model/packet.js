const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packetSchema = new Schema({
    location : {
        type : String,
        required : true,
        max: 255        
    },
    notification : {
        type: String,
        required : true,
        max : 255
    },
    
    userType :{
        type: String,
        required: true,
        max: 100
    },
    imageUrl:{
        type: String,
        //required:true
    },
    date:{
        type: Date,
        default: Date.now,
        timestamps:true


    },

})

module.exports = mongoose.model('Packet',packetSchema)