const User = require('../model/user')
const bcrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { join } = require('path')
const {registerValidation,loginValidation} = require('../validation')
const bcrypt = require('bcryptjs/dist/bcrypt')
const Edge = require('../model/edge')
exports.POSTRegister =  async(req,res,next)=>{

    try{

        console.log(req.body);
        

        const userExist = await User.findOne({email:req.body.email})
        if(userExist) return res.status(400).send('User Exist')
        // Validating User Input
        await registerValidation(req.body)

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        //Hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const user = new User({
            name : name,
            email : email,
            password : hashedPassword,
            userType:"AdminUser"
        })
        try{
            const savedUser = await user.save();
            res.send(savedUser._id)
        } catch(err){
            res.status(400).send(err);
        }
    } catch(err){ 
        return res.status(400).send(err.message)
    }   
}

exports.POSTLogin  = async(req,res,next) => {
    try{
        await loginValidation(req.body)
        const userExist = await User.findOne({email:req.body.email})
        if(!userExist) return res.status(400).send('Wrong email')
        // pwd match
        const pwd = await bcrpt.compare(req.body.password, userExist.password)
        if(!pwd) return res.status(400).send('Wrong PWD')
        
        const email = req.body.email;
        const password = req.body.password;

        const token = jwt.sign({_id: userExist._id}, process.env.TOKEN_SECRET  )
        // res.status(200).send(token)
        res.status(200).header('auth-token',token).send(token)

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }
}
exports.POSTedgeUserRegister =  async(req,res,next)=>{

    try{

        console.log(req.body);
        

        const userExist = await User.findOne({email:req.body.email})
        if(userExist) return res.status(400).send('User Exist')
        // Validating User Input
        await edgeRegisterValidation(req.body)

        const name = req.body.name;
        const ProdID = req.body.ProdID;
        const password = req.body.password;
        //Hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const edgeUser = new Edge({
            name : name,
            ProdID : ProdID,
            password : hashedPassword,
            userType:"EdgeUser"
        })
        try{
            const savedUser = await edgeUser.save();
            res.send(savedUser._id)
        } catch(err){
            res.status(400).send(err);
        }
    } catch(err){ 
        return res.status(400).send(err.message)
    }   
}

exports.GETIndex = (req,res,next) => {
    res.json({
        posts: {
            title:'Myfirst post',
            description:'Random data'
        }
    })
}