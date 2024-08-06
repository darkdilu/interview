const express = require('express');
const admin_route=require('./admin')
const user_router=require('./user')
const auth_router=require('./auth')
const router = express.Router();
const verifyToken=require("../middleware/auth.middleware")
const { adminOnly, userOnly } = require('../middleware/role.middleware');


router.use('/admin',[verifyToken, adminOnly], admin_route);
router.use('/user',[verifyToken, userOnly], user_router);
router.use('/auth', auth_router);

module.exports = router;
