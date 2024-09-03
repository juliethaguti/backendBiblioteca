const express = require('express')
const router = express.Router()
const libroController = require('../controllers/libroController')

router.post('/', libroController.agregarLibro)
router.get('/', libroController.mostrarLibros)
router.get('/:codigo', libroController.mostrarLibroPorCodigo)
router.get('/titulo', libroController.mostrarLibroPorTitulo)
router.get('/autor', libroController.mostrarLibroPorAutor)
router.put('/:id', libroController.modificarLibro)
router.delete('/:id', libroController.eliminarLibro)


module.exports = router
