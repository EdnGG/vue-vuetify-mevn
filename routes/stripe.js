import express from 'express'
const router = express.Router()

const { verificarAuth } = require('../middlewares/auth')

router.get('/stripe', verificarAuth, (req, res) => { 
  res.send('Hello Stripe')
})

// router.post('/', verificarAuth, (req, res) => { 
//   res.send('Hello Stripe')
// })

module.exports = router