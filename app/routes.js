const eo = require('express');
router = eo.Router();
mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.showHome);