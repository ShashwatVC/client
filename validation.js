const Joi = require('joi')


//Register validation

const registerValidation = (data) => {
    const schema = Joi.object({
        name : Joi.string()
        .min(6)
        .required(),
        email : Joi.string()
        .email()
        .min(6)
        .required(),
        password :Joi.string()
        .min(6)
        .required()    
    })
    return schema.validateAsync(data)
}
const edgeRegisterValidation = (data) => {
    const schema = Joi.object({
        name : Joi.string()
        .min(4)
        .required(),
        ProdID : Joi.string()
        .alphanum()
        .min(2)
        .required(),
        password :Joi.string()
        .min(6)
        .required()    
    })
    return schema.validateAsync(data)
}
const loginValidation = (data) => {
    const schema = Joi.object({
        email : Joi.string()
        .email()
        .min(6)
        .required(),
        password :Joi.string()
        .min(6)
        .required()    
    })
    return schema.validateAsync(data)
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = edgeRegisterValidation;

