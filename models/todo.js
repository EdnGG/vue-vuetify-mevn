import mongoose from 'mongoose'
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String, required: [true, 'Todo Title is required']
  },
  // description: String,
  userId: String,
  date: { type: Date, default: Date.now },
  // active: { type: Boolean, default: true},
  done: { type: Boolean, default: false},
  dueDate: { type: Date, default: Date.now },
  index: { type: Number, default: 10000 }
})

// Convertir a modelo
const Todo = mongoose.model('Todo', todoSchema)

export default Todo 