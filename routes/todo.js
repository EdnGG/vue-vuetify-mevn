import express from 'express'
const router = express.Router()

const { verificarAuth, verificarAdministrador } = require('../middlewares/auth')
import * as todoController from '../controllers/todo'
// const { createTodo,
//         getTodo,
//         getTodos,
//         getPagination,
//         deleteTodo,
//         updateTodo,
//         updateDuedateTodo,
//         updateTodoDone,
//         updateList
// } = require('../controllers/todo.js')

// Adding a new todo
router.post('/new-todo', verificarAuth, todoController.createTodo)

// Get con parametros
router.get('/nota/:id', todoController.getTodo )

// Get con todos los documentos
router.get('/todos', verificarAuth, todoController.getTodos )

// Get con paginacion
router.get('/nota', verificarAuth, todoController.getPagination)

// Eliminar una nota
router.delete('/nota/:id', todoController.deleteTodo )

// Put actualizar una nota
router.put('/nota/:id', todoController.updateTodo)

// Put actualizar una nota en su duedate
router.put('/nota/duedate/:id', todoController.updateDuedateTodo )

// Put actualizar una nota en su propieddad done
router.put('/nota/done/:id', todoController.updateTodoDone)

// Put actualizar el orden de la lista de notas
router.put('/nota', todoController.updateList)


module.exports = router

