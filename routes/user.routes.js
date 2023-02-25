const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/register', userController.registerUser);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:token', userController.resetPassword);
router.post('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;

