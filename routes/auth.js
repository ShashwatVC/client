const router = require('express').Router()
const verify = require('../middlewares/verifyToken')

const authRoutes = require('../controller/auth')
const nodeRoutes = require('../controller/node')
router.get('/', verify ,authRoutes.GETIndex)
router.post('/userRegister',authRoutes.POSTRegister)
router.post('/login', authRoutes.POSTLogin)
router.post('/report',nodeRoutes.POSTpacket)

module.exports = router;