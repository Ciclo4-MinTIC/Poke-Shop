const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuario = new Schema({
    name: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    roll: {
        type: String,
        default:"Cliente"
    }
}, 
{
    collection: 'usuarios'
})

module.exports = mongoose.model('Usuario', Usuario)