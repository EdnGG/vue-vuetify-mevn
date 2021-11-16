import express from 'express'
const router = express.Router()

const { verificarAuth, verificarAdministrador } = require('../middlewares/auth')
const { createTodo,
        getTodo,
        getTodos,
        getPagination,
        deleteTodo,
        updateTodo,
        updateDuedateTodo,
        updateTodoDone
} = require('../controllers/todo.js')

// Adding a new todo
router.post('/new-todo', verificarAuth, createTodo)

// Get con parametros
router.get('/nota/:id', getTodo )

// Get con todos los documentos
router.get('/todos', verificarAuth, getTodos )

// Get con paginacion
router.get('/nota', verificarAuth, getPagination)

// Eliminar una nota
router.delete('/nota/:id', deleteTodo )

// Put actualizar una nota
router.put('/nota/:id', updateTodo)

// Put actualizar una nota en su duedate
router.put('/nota/duedate/:id', updateDuedateTodo )

// Put actualizar una nota en su propieddad done
router.put('/nota/done/:id', updateTodoDone)


module.exports = router

