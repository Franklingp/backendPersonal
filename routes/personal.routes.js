'use strict'

// Archivo donde vamos a estar determinando las rutas y los metodos que cargaran con cada una

var express = require('express');
var router = express.Router();

var personalController = require('../controllers/personal.controller');

router.get('/home', personalController.home);
router.post('/empleado', personalController.savePersonal);
router.get('/empleado/:id', personalController.getEmployee);
router.delete('/empleado/:id', personalController.deleteEmployee);
router.put('/empleado/:id', personalController.updateEmployee);
router.get('/personal', personalController.getPersonal);


module.exports = router;