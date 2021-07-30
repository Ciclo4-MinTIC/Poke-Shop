//backend/todo.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Producto = new Schema({
   titulo: {
   type: String,
   required:true
   },
   descripcion: {
   type: String,
   required:true
   },
   imagen: {
   type: String,
   required:true
   },
   precio: {
   type: Number,
   required:true
   },
   calificacion: {
      type: Number
   }
},
{
   collection: 'productos'
});
module.exports = mongoose.model('Producto', Producto);