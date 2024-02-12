const express = require('express');
const router = express.Router()
const authController = require('../src/controllers/authController');
const passport = require('../src/passport_config')

router.post('/login', authController.login);
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res)=>{
    res.send('Welcome to your profile')
});

module.exports = router;