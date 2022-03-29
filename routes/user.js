import express from 'express'
const router = express.Router()

// const { googleSignin, forgotPassword, resetPassword, signup, login } = require('../controllers/auth');
import * as userController from '../controllers/auth'

// hash Password
const bcrypt = require('bcrypt')
const saltRounds = 10

// POST Login
router.post('/login', userController.login )

// POST  New User (Signup)
router.post('/signup', userController.signup )

// PUT  Forgot password (forgot-password)
router.put('/forgot-password', userController.forgotPassword )

// PUT  Reset password (reset-password)
router.put('/reset-password/:resetLink', userController.resetPassword )

// POST  New User (Google Login)
router.post('/google', userController.googleSignin);

module.exports = router