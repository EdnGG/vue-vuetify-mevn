import express from 'express'
const router = express.Router()

const { googleSignin, forgotPassword, resetPassword, signup, login } = require('../controllers/auth');

// hash Password
const bcrypt = require('bcrypt')
const saltRounds = 10

// POST Login
router.post('/login', login )

// POST  New User (Signup)
router.post('/signup', signup )

// PUT  Forgot password (forgot-password)
router.put('/forgot-password', forgotPassword )

// PUT  Reset password (reset-password)
router.put('/reset-password/:resetLink', resetPassword )

// POST  New User (Google Login)
router.post('/google', googleSignin);

module.exports = router