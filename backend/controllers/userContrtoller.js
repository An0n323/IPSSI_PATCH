const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

exports.populate = async (req, res) => {
  try {
    await userService.populateRandomUsers();
    res.send('Base de données peuplée avec succès.');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};