const router = require('express').Router()
const verify = require('../middlewares/verifyToken')

const authRoutes = require('../controller/auth')
const nodeRoutes = require('../controller/node')
// const multer  = require('multer')
// const upload = multer({ dest: 'images/'})
router.get('/all',nodeRoutes.getAll)
router.get('/', verify.Authenticate ,authRoutes.GETIndex)
router.post('/userRegister',authRoutes.POSTRegister)
router.post('/login', authRoutes.POSTLogin)
router.post('/report',nodeRoutes.POSTpacket)
router.post('/postImage',nodeRoutes.UPDTpackage)

module.exports = router;