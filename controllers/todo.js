// Importing Todo model
import Todo from '../models/todo.js'

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

const getTodo = async (req, res) => {
  /* 'req.usuario._id' tiene el token que se lee desde la autenticacion.js
  se almacena de esta forma porque con esa info vamos a filtrar
  las notas por usuario
  */
  //  aqui el _id viene del token que se genera en ./middleware/auth.js
  const _id = req.params.id
  console.log('ID: ', _id)
  try {
    const notaDB = await Todo.findOne({ _id })
    res.json(notaDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Invalid user',
      error
    })
  }
}

const getTodos = async (req, res) => {
  // const _id = req.params.id
  const userId = req.user._id
  try {
    const notasDB = await Todo.find({ userId })
    res.json(notasDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'something was wrong getting all documents',
      error
    })
  }
}

const getPagination = async (req, res) => {
  // const _id = req.params.id

  const usuarioId = req.usuario._id
  const limit = Number(req.query.limit) || 10
  const skip = Number(req.query.skip) || 0

  try {
    const notaDB = await Todo.find({ usuarioId }).limit(limit).skip(skip)
    // Contar documentos
    const totalNotas = await Todo.find({ usuarioId }).countDocuments()
    res.json({ notaDB, totalNotas })
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Error trying to generate pagination',
      error
    })
  }
}

const deleteTodo = async (req, res) => {
  const _id = req.params.id
  try {
    const notaDB = await Todo.findByIdAndDelete({ _id })
    if (!notaDB) {
      return res.status(400).json({
        mensaje: 'can not find the Id provided',
        error
      })
    }
    res.json(null)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'can not find the Id provided',
      error
    })
  }
}
// 
const updateList = async (req, res) => {
  // const _id = req.params
  const body = req.body
  // _id y body llegan undefined
  // console.log('_id: ', _id)
  console.log('body: ', body)
  try {
    // necesito encontrar el metodo correcto
    await Todo.update(body)
    res.json( { message: 'List updated' } )
  } catch (error) {
    return res.status(400).json({
      // Error Aqui
      mensaje: 'can not find the Id provided', 
      error
    })
  }
}

// 
const updateTodo = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  try {
    await Todo.findByIdAndUpdate(_id, body, { new: true })
    res.json({ message: 'Todo updated' })
  } catch (error) {
    return res.status(400).json({
      mensaje: 'can not find the Id provided on update todo', 
      error
    })
  }
}

const updateDuedateTodo = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  try {
    await Todo.findByIdAndUpdate(_id, body, { new: true })
    res.json({ message: 'Duedate updated' })
  } catch (error) {
    return res.status(400).json({
      mensaje: 'can not find the Id provided updtaing duedate',
      error
    })
  }
}

const updateTodoDone = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  try {
// Checar aqui si el usuario es el dueño de la nota
    const user = await Todo.findByIdAndUpdate(_id, body, { new: true })
    res.json({ message: 'Todo updated' })
  } catch (error) {
    return res.status(400).json({
      mensaje: 'can not find the Id provided on update todo done',
      error
    })
  }
}

module.exports = {
  createTodo,
  getTodo,
  getTodos,
  getPagination,
  deleteTodo,
  updateTodo,
  updateDuedateTodo,
  updateTodoDone,
  updateList
}
