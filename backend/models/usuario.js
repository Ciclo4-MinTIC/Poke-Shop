const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuario = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    roll: {
        type: String
    }
}, 
{
    collection: 'usuarios'
})

module.exports = mongoose.model('Usuario', Usuario)