const express = require('express')
const conectarDB = require('../configdb/db')
const cors = require('cors')

const app = express()
const port = 5000 || process.env.PORT

conectarDB()
app.use(cors())
app.use(express.json())

// Rutas del proyecto

app.use('/api/bliblioteca/libros', require('../routes/librosRuta'))
app.use('/api/bliblioteca/usuarios', require('../routes/usuarioRuta'))
app.use('/api/bliblioteca/prestamos', require('../routes/prestamosRutas'))

//Ruta de la Web

app.get('/', (req, res) => {
    res.send('Estamos conectados desde el navegador')
})

app.listen(port, () => console.log('Conectados desde el servidor', port))
