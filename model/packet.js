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
    imageUrl:{
        type: String,
        required:true
    },
    userType :{
        type: String,
        required: true,
        max: 100
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
})

module.exports = mongoose.model('Packet',packetSchema)