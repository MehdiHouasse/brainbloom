const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profile');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)

// Define a route for the profile page
router.get('/profile', profileCtrl.getProfileData);

module.exports = router;
