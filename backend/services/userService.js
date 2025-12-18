const User = require('../models/User');

exports.findAllUsers = async () => {
  return await User.findAll(); // Sequelize génère le SQL automatiquement
};