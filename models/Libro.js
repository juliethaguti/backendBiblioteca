const mongoose = require('mongoose')

const libroSchema = mongoose.Schema({

    codigo: {
        type: Number,
        required: true, 
        unique: true
        
    },
    titulo: {
        type: String,
        required:true
    },
    autor: {
        type: String,
        required: true,
    },
    editorial: {
        type: String,
        reqiuired: true
    },
    año: {
        type: Number
    },
    imagen: {
        type: String
    }

}, { versiokey: false })

module.exports = mongoose.model('Libro', libroSchema)
