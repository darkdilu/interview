const express = require('express');
const { login } = require('../controller/auth_controller/login');
const {signup}=require('../controller/auth_controller/siginup')
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);


module.exports = router;