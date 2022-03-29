import express from 'express'
const router = express.Router()

const { verificarAuth, verificarAdministrador } = require('../middlewares/auth')
import * as todoController from '../controllers/todo'

// Adding a new todo
router.post('/new-todo', verificarAuth, todoController.createTodo)
// router.post('/todos', verificarAuth, todoController.createTodo)


// Get con parametros
router.get('/nota/:id', todoController.getTodo )
// router.get('/todos/:id', todoController.getTodo)


// Get con todos los documentos
router.get('/todos', verificarAuth, todoController.getTodos )

// DEPRECATED
// Get con paginacion
router.get('/nota', verificarAuth, todoController.getPagination)
// query params {?page=1&limit=10&sort=index:asc}


// Eliminar una nota
router.delete('/nota/:id', todoController.deleteTodo )
// router.delete('/todos/:id', todoController.deleteTodo)


// Put actualizar una nota
router.put('/nota/:id', todoController.updateTodo)
// router.put('/todos/:id', todoController.updateTodo)

// DEPRECATED
// Put actualizar una nota en su duedate
router.put('/nota/duedate/:id', todoController.updateDuedateTodo )

// DEPRECATED
// Put actualizar una nota en su propieddad done
router.put('/nota/done/:id', todoController.updateTodoDone)

// Put actualizar el orden de la lista de notas
router.put('/nota', todoController.updateList)


module.exports = router

