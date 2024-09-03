const mongoose = require('mongoose')
require('dotenv').config()

// Conexion con mongo DB

const conectarDB = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log('Estamos conectados a la Base de Datos'))
        .catch((err) => console.log(err))
    
}

module.exports = conectarDB
