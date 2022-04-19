const express = require('express');
const router = express.Router();
const controller = require('../controllers/consulta-controller');

router.get('/', controller.consulta)


module.exports = router;