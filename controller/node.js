const Packet = require('../model/packet')

exports.POSTpacket = async(req,res,next)=>{
    try{
        const location = req.body.location
        const notification = req.body.location
        const userType = req.body.userType
        console.log(req.body);

        const packet = new Packet({
            location : req.body.location,
            notification : req.body.location,
            userType : req.body.userType
        })
        try{
            pack = await packet.save();
            res.send(pack._id)
        }catch(err){
            console.log(err);
            res.status(400).send(err);

        }
    }
    catch(err){
        console.log(err)
        res.status(400).send(err);

    }
}