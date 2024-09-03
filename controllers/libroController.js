const Libro = require('../models/Libro')

// Agregar libros

exports.agregarLibro = async (req, res) => {
    
    try {
        let libros
        libros = new Libro(req.body)
        await libros.save()
        res.json(libros)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al agregar el libro')

    }
}

// Mostrar libros

exports.mostrarLibros = async (req, res) => {
    try {
        const libros = await Libro.find()
        res.json(libros)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al mostrar los libros')

    }
}

exports.mostrarLibroPorCodigo = async (req, res) => {

    const { params: { codigo } } = req
    
    try {
        const libro = await Libro.find({ codigo: codigo })
        //res.json(libro)

        if (!libro) {
            res.status(404).send({ msg: 'No se encontraron resultados relacionados con la busqueda' })
            
        } else {
            res.json(libro)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}


// Mostrar libro por titulo

exports.mostrarLibroPorTitulo = async (req, res) => {
    
    //const { params: { titulo } } = req
    console.log(req.query.titulo)
    try {
        const libro = await Libro.find({ titulo: `${req.query.titulo}` })

        if (!libro) {
            res.status(404).send({ msg: 'No se encontraron resultados relacionados con la busqueda' })
            
        } else {
            res.json(libro)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

// Mostrar libros por Autor

exports.mostrarLibroPorAutor = async (req, res) => {
    
    try {
        const libro = await Libro.find({ autor: `${req.query.autor}` })

        if (!libro) {
            res.status(404).send({ msg: 'No se encontraron resultados relacionados con la busqueda' })
            
        } else {
            res.json(libro)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

//Modificar libros

exports.modificarLibro = async (req, res) => {
    
    try {
        const libro = await Libro.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        
        if (!libro) {
            res.status(404).send({ msg: 'El libro no se encuentra' })
        } else {
            res.json(libro)
        }
        
    }catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

//Eliminar libro

exports.eliminarLibro = async (req, res) => {
    try {
        const libro = await Libro.findById({_id: req.params.id})

        if (!libro) {
            res.status(404).send({ msg: 'El libro no se encuentra' })
            return
        }

        await Libro.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "El libro fue eliminado con exito" })
        return

        }
     catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar un libro')
    }
}
