const express = require('express');
const router = express.Router();
const quizCtrl = require('../../controllers/api/quiz');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', quizCtrl.create);

router.post('/save', quizCtrl.save);
router.get('/', quizCtrl.getAll);


module.exports = router;
