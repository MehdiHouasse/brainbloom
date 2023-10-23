const express = require('express');
const router = express.Router();
const questionCtrl = require('../../controllers/api/question');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', questionCtrl.create);

// router.get('/:id', questionCtrl.show);
// router.post('/', questionCtrl.create);
// router.put('/:id', questionCtrl.update);
// router.delete('/:id', questionCtrl.delete);

module.exports = router;
