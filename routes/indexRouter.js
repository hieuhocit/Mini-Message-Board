const { Router } = require('express');
const indexController = require('../controllers/indexController');

const router = Router();

router.get('/', indexController.get);
router.get('/:id', indexController.getById);

module.exports = router;
