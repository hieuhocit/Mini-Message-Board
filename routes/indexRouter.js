const { Router } = require('express');
const indexController = require('../controllers/indexController');

const router = Router();

router.get('/', indexController.get);
router.get('/:username', indexController.getByUserName);

module.exports = router;
