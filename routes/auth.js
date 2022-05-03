const router = require('express').Router()
const verify = require('../middlewares/verifyToken')

const authRoutes = require('../controller/auth')
const nodeRoutes = require('../controller/node')
// const multer  = require('multer')
// const upload = multer({ dest: 'images/'})
router.get('/', verify ,authRoutes.GETIndex)
router.post('/edgeUserRegister', authRoutes.POSTedgeUserRegister)
router.post('/userRegister',authRoutes.POSTRegister)
router.post('/login', authRoutes.POSTLogin)
router.post('/report',nodeRoutes.POSTpacket)
// router.post('/postImage',nodeRoutes.UPDTpackage)

module.exports = router;