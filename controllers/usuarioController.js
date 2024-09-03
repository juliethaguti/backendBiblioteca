const Usuario = require('../models/usuario')

// Agregar usuario

exports.agregarUsuario = async (req, res) => {
    
    try {
        let usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.json(usuario)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al agregar el usuario')

    }
}

// Mostrar usuarios

exports.mostrarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al mostrar los libros')

    }
}

// Mostrar usuario por documento

exports.mostrarUsuarioPorDocumento = async (req, res) => {

    const { params: { documento } } = req
    
    try {
        const usuario = await Usuario.find({ documento: documento })
        //res.json(libro)

        if (!usuario) {
            res.status(404).send({ msg: 'No se encontraron resultados relacionados con la busqueda' })
            
        } else {
            res.json(usuario)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

//Modificar usuario

exports.modificarUsuario = async (req, res) => {
    
    try {
        const usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        
        if (!usuario) {
            res.status(404).send({ msg: 'El usuario no se encuentra' })
        } else {
            res.json(usuario)
        }
        
    }catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}


//Eliminar usuario

exports.eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById({_id: req.params.id})

        if (!usuario) {
            res.status(404).send({ msg: 'El usuario no se encuentra' })
            return
        }

        await Usuario.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "El usuario fue eliminado con exito" })
        return

        }
     catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar un usuario')
    }
}
