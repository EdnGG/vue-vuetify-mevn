import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
// const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const roles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} Invalid role",
};

const userSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  pass: { type: String, required: [true, "Password is required"] },
  date: { type: Date, default: Date.now },
  role: { type: String, default: "USER", enum: roles },
  active: { type: Boolean, default: true },
  resetLink: { type: String, default: "" },
  google: { type: Boolean, default: false },
  image: { type: String, required: false },
  todos: { type: String, required: false }, // relacion con sus tareas
});

/* { PATH } Sera reemplazado por el campo con el atributo 'unique' declarado
en este caso seria 'email'
*/
userSchema.plugin(uniqueValidator, {
  message: "Error, waiting for unique {PATH} ",
});

// Ocultar propiedades de objetos mongoose JSON
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.pass;
  return obj;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
