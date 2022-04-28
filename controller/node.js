const packet = require('../model/packet')
const Packet = require('../model/packet')


exports.POSTpacket = async(req,res,next)=>{
    try{
        const location = req.body.location
        const notification = req.body.location
        const userType = req.body.userType
        // const image = req.body.image;
        const image = req.file;


        
        console.log(req.body);
        const imageUrl = image.path;
        console.log(imageUrl);

        const packet = new Packet({
            location : location,
            notification : notification,
            imageUrl: imageUrl,
            // imageUrl: image,
            userType : userType
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

exports.UPDTpackage = async(req,res,next)=>{

    try{
        const obID = req.body.id
        const image = req.file
        const imageUrl = image.path
        packet = Packet.findById(obID)
        packet.imageUrl = imageUrl
        packet.save()
    }
    catch(err){
        console.log(err);
    }

}