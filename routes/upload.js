import express from 'express'
const router = express.Router()

const uploadImage  = require('../controllers/uploads')

router.put('/upload/:id', uploadImage )

module.exports = router