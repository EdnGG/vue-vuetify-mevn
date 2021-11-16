// import express from 'express'

// const router = express.Router()

// Importing Todo model
// const Todo = require('../models/todo.js')
import Todo from '../models/todo.js'

const log = (req, res) => {
    console.log('log')
}
// talvez tengo que poner el next al middleware de verificarAuth?
const createTodo = async (req, res) => {
    
    // 'req' es lo que envias 'res' es lo que responde el servidor
     const body = req.body
   
//     /* 'req.usuario._id' tiene el token que se lee desde la autenticacion.js
//     se almacena de esta forma porque con esa info vamos a filtrar
//     las notas por usuario
//     */
//     //  aqui el _id viene del token que se genera en ./middleware/auth.js
  
     body.userId = req.user
     console.log('userId: ', body.userId)
  
     try {
         console.log('body: ', body)
         const notaDB = await Todo.create(body)
         console.log('nota db ', notaDB)
       // El status 200 esta por defecto en Express so no se nesesita mandar res.status(200).json(notaDB)
      
       res.json(notaDB)
     } catch (error) {
       return res.status(500).json({
         mensaje: ' wrong',
         error: error
       })
     }
    
   }
  
module.exports = {
      createTodo,
      log
    }
