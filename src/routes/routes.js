const { Router } = require('express');
const componentes = require('../controllers/componentes.controllers');

const {
    getUsers,
    getUserByUsername,
    createUser,
    deleteUser,
    updateUser,
} = require('../controllers/user.controller');

const router = Router();

/* Usuarios */
router.get('/users', getUsers);
router.get('/users/:username', getUserByUsername);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

/* Componentes */
router.get('/components', componentes.consultarProductos);
router.get('/components/:id', componentes.consultarUnProducto);
router.post('/components', componentes.crearProducto);
router.put('/components/:id', componentes.actualizarProducto);
router.delete('/components/:id', componentes.borrarProducto);

/* Pedidos */


module.exports = router;
