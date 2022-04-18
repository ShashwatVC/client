const router = require('express').Router()
const verify = require('../middlewares/verifyToken')

authRoutes = require('../controller/auth')
router.get('/', verify ,authRoutes.GETIndex)
router.post('/userRegister',authRoutes.POSTRegister)
router.post('/login', authRoutes.POSTLogin)

module.exports = router;