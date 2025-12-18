require('dotenv').config(); // Charge les variables du fichier .env
const { Sequelize } = require('sequelize');

// Initialisation de Sequelize avec les variables sécurisées
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
  logging: false // Pour ne pas polluer la console avec les requêtes SQL
});

module.exports = sequelize;