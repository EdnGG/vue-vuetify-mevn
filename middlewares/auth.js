const jwt = require('jsonwebtoken')

const verificarAuth = (req, res, next) => {
  const token = req.get('token')

  console.log('Token on backend: ', token)
  jwt.verify(token, process.env.SECRETORPRIVATEKEY, (err, decoded) => {

    if (err) {
      return res.status(401).json({
        mensaje: 'Invalid user',
      })
    }
    // Adding the 'user' propertiy to the 'req' object
    req.user = decoded.data
    next()
  })
}

const verificarAdministrador = (req, res, next) => {
  const role = req.usuario.role

  if (role === 'ADMIN') {
    next()
  } else {
    return res.status(401).json({
      mensaje: 'Invalid user',
    })
  }
}

module.exports = { verificarAuth, verificarAdministrador }