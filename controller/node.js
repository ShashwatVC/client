const packet = require('../model/packet')
const Packet = require('../model/packet')
const io = require('../socket')
const packs = require('../model/packet')
const { object } = require('joi')
const fs = require('fs');
const { log } = require('console')

exports.getAll = async(req,res,next)=>{

    packs.find({}).sort({_id: -1}).limit(1)
    .then(packets => {
        // console.log(packets[0].imageUrl);
        // fs.readFile(packets[0].imageUrl, 'utf8', (err, data) => {
        //     if (err) {
        //       console.error(err);
        //       return;
        //     }
        //     console.log('read');
        //   });
        // function base64_encode(file) {
        // // read binary data
        // var bitmap = fs.readFileSync(file);
        // // convert binary data to base64 encoded string
        // return new Buffer(bitmap).toString('base64');

        // }

        // imgbsenc = base64_encode(packets[0].imageUrl)
        // // console.log(imgbsenc);
        var payload_base = packets
        console.log(typeof(payload_base));
        // payload = object({'_id':packets[0]._id,'location':packets[0].location,'notification':packets[0].notification,'userType':packets[0].userType,'imageUrl':packets[0].imageUrl})
        res.json(payload_base)

    })
    .catch(err=>{
        console.log(err);
    })        
    
    // console.log(products[0].voice))
    // packs.find()
    // .then(packets => {
    //     res.send({
    //         packs:packets
    //     })
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
}

exports.POSTpacket = async(req,res,next)=>{
    try{
        const location = req.body.location
        const notification = req.body.notification
        const userType = req.body.userType
        // const image = req.body.image;
        const image = req.file;


        
        // console.log(req.body);
        const imageUrl = image.originalname;
        console.log(image);
        // console.log(imageUrl);

        const packet = new Packet({
            location : location,
            notification : notification,
            imageUrl: imageUrl,
            // imageUrl: image,
            userType : userType
        })
        try{
            pack = await packet.save();
            res.send("okk")
            // io.getIO().broadcast('packet',{action:'alert', packet:packet})
            // res.send(pack._id)
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