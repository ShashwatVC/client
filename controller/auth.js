const User = require('../model/auth')
const Joi = require('joi')
const { join } = require('path')
const schema = Joi.object({
    name : Joi.string().min(6).required(),
    email : Joi.string().email().min(6).required(),
    password :Joi.string().min(6).required()    
})


exports.POSTRegister =  async(req,res,next)=>{
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    console.log(req.body);

// try{
//     const val = await schema.validateAsync(req.body)
//     res.send(val)
//     console.log(val);
// } catch(err){ 
//     console.log(err);
// }   


    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User({
        name : name,
        email : email,
        password : password
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser)
    } catch(err){
        res.status(400).send(err);
    }

}