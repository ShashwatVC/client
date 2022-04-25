const Packet = require('../model/packet')

exports.POSTpacket = async(req,res,next)=>{
    try{
        const location = req.body.location
        const notification = req.body.location
        const userType = req.body.userType
        const image = req.file;

        
        // console.log(req.body);
        const imageUrl = image.path;
        console.log(image);

        const packet = new Packet({
            location : req.body.location,
            notification : req.body.location,
            imagreUrl: imageUrl,
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