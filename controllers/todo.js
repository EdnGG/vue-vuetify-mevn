// Importing Todo model
import Todo from '../models/todo.js'

export const createTodo = async (req, res) => {
  // 'req' es lo que envias 'res' es lo que responde el servidor
  const { body } = req
  //     /* 'req.usuario._id' tiene el token que se lee desde la autenticacion.js
  //     se almacena de esta forma porque con esa info vamos a filtrar
  //     las notas por usuario
  //     */
  //     //  aqui el _id viene del token que se genera en ./middleware/auth.js

  body.userId = req.user
  try {
    const notaDB = await Todo.create(body)
    console.log('nota db ', notaDB)
    // El status 200 esta por defecto en Express so no se nesesita mandar res.status(200).json(notaDB)
    res.json(notaDB)
  } catch (error) {
    return res.status(500).json({
      mensaje: 'something was wrong creating the document',
      error: error
    })
  }
}

export const getTodo = async (req, res) => {
  const { _id } = req.params
  console.log('ID: ', _id)
  try {
    const notaDB = await Todo.findOne({ _id })
    res.json(notaDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Invalid userId provided',
      error
    })
  }
}

export const getTodos = async (req, res) => {
  // const _id = req.params.id
  const userId = req.user._id
  try {
    const notasDB = await Todo.find({ userId }).sort({ index: 1 })
    console.log('notasDB: ', notasDB)
    res.json(notasDB)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'something was wrong getting all documents',
      error
    })
  }
}

export const getPagination = async (req, res) => {
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

export const deleteTodo = async (req, res) => {
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
export const updateList = async (req, res) => {
  const { body } = req
  console.log('body: ', body)
  try {
    await Promise.all(
      [ ...body ].map( async (item) => await Todo.findByIdAndUpdate( item._id, item ))
    )
    res.json( { message: 'List updated' } )
  } catch (error) {
    return res.status(400).json({
      mensaje: 'can not find the Id provided', 
      error
    })
  }
}

// 
export const updateTodo = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  console.log('body: ' ,body)
  try {
    await Todo.findByIdAndUpdate(_id, body, { new: true })
    res.json({ message: 'Todo updated' })
  } catch (error) {
    return res.status(400).json({
      mensaje: "Can't find the Id provided on update todo", 
      error
    })
  }
}

export const updateDuedateTodo = async (req, res) => {
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

export const updateTodoDone = async (req, res) => {
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


