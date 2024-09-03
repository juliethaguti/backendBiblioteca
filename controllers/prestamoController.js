const Prestamo = require('../models/prestamo')

// Agregar prestamo

exports.agregarPrestamo = async (req, res) => {
    
    let { codigoLibro, documentoUsuario, fechaPrestamo, fechaEntrega } = req.body
    const prestamoEncontrado = await Prestamo.find({ codigoLibro: codigoLibro, documentoUsuario: documentoUsuario })
    console.log(prestamoEncontrado)
    if (prestamoEncontrado.length == 0) {
        try {
        
        let prestamo
        prestamo = new Prestamo({
            codigoLibro: codigoLibro,
            documentoUsuario: documentoUsuario,
            fechaPrestamo: fechaPrestamo,
            fechaEntrega: fechaEntrega
        })
        
        await prestamo.save()
        console.log(fechaEntrega)
        res.json(prestamo)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al crear el prestamo')

        }
        
    } else {
        res.status(500).send('El préstamo ya está creado')
    }
}

// Mostrar prestamo

exports.mostrarPrestamos = async (req, res) => {
    try {
        const prestamo = await Prestamo.find()
        res.json(prestamo)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al mostrar los prestamos')

    }
}

// Mostrar prestamo por Id  

exports.mostrarPrestamoPorId = async (req, res) => {

    const { params: { codigo } } = req
    
    try {
        const prestamo = await Prestamo.find({ _id: req.params.id })

        if (!prestamo) {
            res.status(404).send({ msg: 'No se encontraron resultados relacionados con la busqueda' })
            
        } else {
            res.json(prestamo)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

// Mostrar prestamos por Usuario

exports.mostrarPrestamosPorUsuario = async (req, res) => {
    
    try {
        const libro = await Libro.find({ documentoUsuario: `${req.query.documentoUsuario}` })

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


//Modificar prestamo

exports.modificarPrestamo = async (req, res) => {
    
    try {
        const prestamo = await Prestamo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        
        if (!prestamo) {
            res.status(404).send({ msg: 'El prestamo no se encuentra' })
        } else {
            res.json(prestamo)
        }
        
    }catch (error) {
        console.error(error)
        res.status(500).send('Error al realizar la busqueda')
    }
}

//Eliminar prestamo

exports.eliminarPrestamo = async (req, res) => {
    try {
        const prestamo = await Prestamo.findById({_id: req.params.id})

        if (!prestamo) {
            res.status(404).send({ msg: 'El libro no se encuentra' })
            return
        }

        await Prestamo.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "El prestamo fue eliminado con exito" })
        return

        }
     catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar un libro')
    }
}