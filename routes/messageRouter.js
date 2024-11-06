const { Router } = require('express');
const messageController = require('../controllers/messageController');

const router = Router();

router.get('/', messageController.get);
router.post('/', messageController.post);

module.exports = router;
