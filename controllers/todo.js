import express from 'express'
// const router = express.Router()
const jwt = require('jsonwebtoken')


// Importar el modelo nota
const Todo = require('../models/todo.js')

// const { verificarAuth, verificarAdministrador } = require('../middlewares/auth')

const log = (req, res) => {
    console.log('log')
}

const createTodo = async (req, res) => {
    // 'req' es lo que envias 'res' es lo que responde el servidor
    const body = req.body
   
    /* 'req.usuario._id' tiene el token que se lee desde la autenticacion.js
    se almacena de esta forma porque con esa info vamos a filtrar
    las notas por usuario
    */
    //  aqio el _id viene del token que se genera en ./middleware/auth.js
  
    body.userId = req.user
    console.log('userId: ', body.userId)
  
    try {
      const notaDB = await Todo.create(body)
      console.log('nota db ', notaDB)
      // El status 200 esta por defecto en Express so no se nesesita mandar res.status(200).json(notaDB)
      
      res.json(notaDB)
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Something was wrong',
        error: error
      })
    }
    
  }
  

  module.exports = {
      createTodo,
      log
    }
