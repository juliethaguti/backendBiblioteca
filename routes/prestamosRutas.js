const express = require('express')
const router = express.Router()
const prestamoController = require('../controllers/prestamoController')

router.post('/', prestamoController.agregarPrestamo)
router.get('/', prestamoController.mostrarPrestamos)
router.get('/:id', prestamoController.mostrarPrestamoPorId)
router.put('/:id', prestamoController.modificarPrestamo)
router.delete('/:id', prestamoController.eliminarPrestamo)


module.exports = router