const express = require('express');
const router = express.Router();
const { ClientsController } = require('../../controllers/Ejemplo');

router.get('/',ClientsController.getClients);
router.post('/',ClientsController.insetClient);
router.put('/:id',ClientsController.updateClient);
router.delete('/:id',ClientsController.deleteClient);
router.get('/:id',ClientsController.getClient);


module.exports = router