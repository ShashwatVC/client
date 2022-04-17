const router = require('express').Router()
authRoutes = require('../controller/auth')
router.post('/register',authRoutes.POSTRegister)

module.exports = router;