const express = require('express');
const router = express.Router();
const userController = require('../controllers/userConttroller'); // Attention à l'orthographe de ton fichier

// Définition des routes
router.get('/users', userController.getUsers);
router.get('/populate', userController.populate);

module.exports = router;