const express = require('express')

const app = express()

const jwt = require('jsonwebtoken')

exports.Authenticate = async(req,res,next)=> {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(token);
    if(!token) return res.status(401).send('Access-Denied')
    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    }catch(err){
        res.status(400).send('Invalid-Token')
    }
}

exports.Refresh = async(req,res,next)=>{

}