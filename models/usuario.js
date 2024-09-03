const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({

    documento: {
        type: Number,
        required: true, 
        unique: true
        
    },
    nombre: {
        type: String,
        required:true
    },
    fecha: {
        type: Date
    }

}, { versiokey: false })

module.exports = mongoose.model('Usuario', usuarioSchema)