const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

router.post('/', usuarioController.agregarUsuario)
router.get('/', usuarioController.mostrarUsuarios)
router.get('/:documento', usuarioController.mostrarUsuarioPorDocumento)
router.put('/:id', usuarioController.modificarUsuario)
router.delete('/:id', usuarioController.eliminarUsuario)


module.exports = router