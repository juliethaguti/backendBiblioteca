const mongoose = require('mongoose')

const prestamoSchema = mongoose.Schema({

    codigoLibro: {
        type: Number,
        required: true,
    },
    documentoUsuario: {
        type: Number,
        required: true,
    },
    fechaPrestamo: {
        type: Date,
        required: true,
        min: '1924-01-01'
    },
    fechaEntrega: {
        type: Date,
        required:true
    }

}, { versiokey: false })

module.exports = mongoose.model('Prestamo', prestamoSchema)