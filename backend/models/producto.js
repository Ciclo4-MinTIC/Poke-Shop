//backend/todo.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Producto = new Schema({
 titulo: {
 type: String
 },
 descripcion: {
 type: String
 },
 imagen: {
 type: String
 },
 precio: {
 type: Number
 },
 calificacion: {
    type: Number
 }
},{
   collection: 'usuarios'
});
module.exports = mongoose.model('Producto', Producto);